const axios = require('axios');
const path = require('path');
const dotenv = require('dotenv');

// Ensure .env is loaded even if this file is required before server.js runs dotenv
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const getEnv = () => {
  const {
    HIREPOSE_BASE_URL = 'https://api.hirepos.com',
    HIREPOSE_API_KEY,
    HIREPOSE_API_KEY_SECRET,
    HIREPOSE_TIMEOUT,
    HIREPOSE_CUSTOMERS_PATH,
    HIREPOSE_CUSTOMERS_BODY,
    HIREPOSE_CUSTOMERS_METHOD,
  } = process.env;

  if (!HIREPOSE_API_KEY || !HIREPOSE_API_KEY_SECRET) {
    const error = new Error('HirePose credentials are not configured.');
    error.code = 'HIREPOSE_CONFIG_MISSING';
    throw error;
  }

  const customersPath = HIREPOSE_CUSTOMERS_PATH || '/Customers';
  return {
    HIREPOSE_BASE_URL,
    HIREPOSE_API_KEY,
    HIREPOSE_API_KEY_SECRET,
    HIREPOSE_TIMEOUT: Number(HIREPOSE_TIMEOUT) || 10000,
    HIREPOSE_CUSTOMERS_PATH: customersPath.startsWith('/') ? customersPath : `/${customersPath}`,
    HIREPOSE_CUSTOMERS_BODY,
    HIREPOSE_CUSTOMERS_METHOD: (HIREPOSE_CUSTOMERS_METHOD || 'POST').toUpperCase(),
  };
};

const getClient = () => {
  const { HIREPOSE_BASE_URL, HIREPOSE_API_KEY, HIREPOSE_API_KEY_SECRET, HIREPOSE_TIMEOUT } = getEnv();
  return axios.create({
    baseURL: HIREPOSE_BASE_URL,
    timeout: HIREPOSE_TIMEOUT,
    headers: {
      AuthKey: HIREPOSE_API_KEY,
      AuthSecret: HIREPOSE_API_KEY_SECRET,
      'Content-Type': 'application/json',
    },
  });
};

const extractCustomersArray = (data) => {
  const candidates = [
    data?.Customers,
    data?.customers,
    data?.Data?.Customers,
    data?.data?.Customers,
    data?.Customers?.Items,
    data?.customers?.Items,
    data?.Items,
  ];

  for (const arr of candidates) {
    if (Array.isArray(arr)) return arr;
  }

  if (Array.isArray(data)) return data;
  return [];
};

const getCustomers = async () => {
  const client = getClient();
  const {
    HIREPOSE_CUSTOMERS_PATH,
    HIREPOSE_CUSTOMERS_BODY,
    HIREPOSE_CUSTOMERS_METHOD,
  } = getEnv();

  // Parse optional body from env or default to {}
  let requestBody = {};
  if (HIREPOSE_CUSTOMERS_BODY) {
    try {
      requestBody = JSON.parse(HIREPOSE_CUSTOMERS_BODY);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn('Invalid JSON in HIREPOSE_CUSTOMERS_BODY, falling back to empty body');
    }
  }

  const performRequest = async (method) => {
    if (method === 'GET') {
      return client.get(HIREPOSE_CUSTOMERS_PATH);
    }
    return client.post(HIREPOSE_CUSTOMERS_PATH, requestBody);
  };

  let response;
  try {
    response = await performRequest(HIREPOSE_CUSTOMERS_METHOD);
  } catch (err) {
    // Fallback: if POST fails with 400/405, try GET
    const status = err?.response?.status;
    const shouldRetryGet =
      HIREPOSE_CUSTOMERS_METHOD === 'POST' && (status === 400 || status === 405 || status === 404);
    if (shouldRetryGet) {
      response = await performRequest('GET');
    } else {
      throw err;
    }
  }

  const data = response?.data || {};

  // eslint-disable-next-line no-console
  console.log('HirePose response', JSON.stringify(data, null, 2));

  const errorRaised = data.ErrorRaised === true || data.ErrorRaised === 'True';
  if (errorRaised) {
    const error = new Error(data.ErrorMessage || 'HirePose returned an error');
    error.code = 'HIREPOSE_API_ERROR';
    error.details = data;
    throw error;
  }

  // API responds with { Customers: [...] } but we also check other shapes
  const customers = extractCustomersArray(data);
  return { customers, raw: data };
};

// Normalize HirePose customer payload to a consistent shape for the frontend
const normalizeCustomers = (rawCustomers = []) => {
  return rawCustomers.map((c) => {
    const company = c.Company || c.company || c.companyName;
    const firstName = c.FirstName || c.firstName;
    const lastName = c.LastName || c.lastName;
    const fullName = [firstName, lastName].filter(Boolean).join(' ').trim();
    const name = company || fullName || c.Name || c.name || 'N/A';
    const email = c.Email || c.email || c.EmailAddress || 'N/A';
    const phone = c.Phone1 || c.Phone2 || c.Phone3 || c.phone || c.phoneNumber || c.mobile || 'N/A';
    const city = c.City || c.city || '';
    const state = c.State || c.state || '';

    return {
      id: c.Id || c.id || c._id || c.uuid || c.Email || `${name}-${city}` || name,
      name,
      company: company || 'N/A',
      email,
      phone,
      city: city || 'N/A',
      state: state || 'N/A',
      raw: c, // keep original payload for debugging/expansion on the frontend if needed
    };
  });
};

module.exports = { getCustomers, normalizeCustomers };
