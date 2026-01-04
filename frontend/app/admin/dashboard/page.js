'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const [ready, setReady] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [raw, setRaw] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userType = localStorage.getItem('userType');
    if (!token || userType !== 'admin') {
      router.replace('/test-login');
      return;
    }

    const fetchCustomers = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/admin/customers', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (!res.ok) {
          const detail = data.details ? ` (${JSON.stringify(data.details)})` : '';
          throw new Error((data.message || 'Failed to load customers') + detail);
        }
        setCustomers(Array.isArray(data.customers) ? data.customers : []);
        setRaw(data.raw || null);
      } catch (err) {
        console.error('Admin customers fetch error:', err);
        setError(err.message || 'Failed to load customers');
      } finally {
        setReady(true);
        setLoading(false);
      }
    };

    fetchCustomers();
  }, [router]);

  if (!ready) return <p>Redirecting to login...</p>;

  return (
    <div style={{ padding: 24 }}>
      <h1>Admin Dashboard (Test)</h1>
      <p>Welcome, Admin — manage your data below.</p>

      <section style={{ marginTop: 24 }}>
        <h2>HirePose Customers</h2>
        {loading && <p>Loading customers…</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!loading && !error && customers.length === 0 && (
          <div>
            <p>No customers found.</p>
            {raw && (
              <details style={{ marginTop: 8 }}>
                <summary>Show raw HirePose response</summary>
                <pre style={{ whiteSpace: 'pre-wrap', background: '#f7f7f7', padding: 12, borderRadius: 6, marginTop: 8 }}>
                  {JSON.stringify(raw, null, 2)}
                </pre>
              </details>
            )}
          </div>
        )}
        {!loading && !error && customers.length > 0 && (
          <div style={{ border: '1px solid #ddd', borderRadius: 6, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.2fr 1fr 0.8fr', padding: '10px 12px', background: '#f5f5f5', fontWeight: 600 }}>
              <span>Company</span>
              <span>Name</span>
              <span>Email</span>
              <span>Phone</span>
              <span>City/State</span>
            </div>
            {customers.map((cust) => (
              <div
                key={cust.id}
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.2fr 1fr 0.8fr', padding: '10px 12px', borderTop: '1px solid #eee' }}
              >
                <span>{cust.company || 'N/A'}</span>
                <span>{cust.name || 'N/A'}</span>
                <span>{cust.email || 'N/A'}</span>
                <span>{cust.phone || 'N/A'}</span>
                <span>{`${cust.city || 'N/A'} ${cust.state ? `, ${cust.state}` : ''}`}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      <button style={{ marginTop: 24 }} onClick={() => { localStorage.clear(); router.push('/test-login'); }}>Logout</button>
    </div>
  );
}
