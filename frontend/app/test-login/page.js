'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TestLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('client');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // If a valid token already exists, use it to redirect to the correct portal
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    const checkProfile = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (!res.ok) {
          localStorage.clear();
          return;
        }
        if (data.user?.userType && data.redirectUrl) {
          router.replace(data.redirectUrl);
        }
      } catch (err) {
        console.error('Profile fetch error:', err);
      }
    };

    checkProfile();
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, userType }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Login failed');
        setLoading(false);
        return;
      }

      // Save token and user info (for testing only)
      localStorage.setItem('token', data.token);
      if (data.user) localStorage.setItem('userType', data.user.userType);
      localStorage.setItem('user', JSON.stringify(data.user || {}));

      // Redirect using backend-provided redirectUrl (or fallback)
      router.push(data.redirectUrl || '/');
    } catch (err) {
      console.error('Login fetch error:', err);
      setError('Network error — check backend is running');
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 520, margin: '32px auto', padding: 20, fontFamily: 'sans-serif' }}>
      <h2>Test Login (admin / supplier / client)</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 8 }}>
          <label style={{ display: 'block', marginBottom: 4 }}>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="email@example.com"
            style={{ width: '100%', padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ display: 'block', marginBottom: 4 }}>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="password"
            style={{ width: '100%', padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ display: 'block', marginBottom: 4 }}>Login as</label>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            style={{ width: '100%', padding: 8 }}
          >
            <option value="client">Client</option>
            <option value="supplier">Supplier</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit" disabled={loading} style={{ padding: '8px 16px' }}>
          {loading ? 'Logging in…' : 'Login'}
        </button>
      </form>

      {error && <p style={{ color: 'red', marginTop: 12 }}>{error}</p>}

      <div style={{ marginTop: 20 }}>
        <strong>Test accounts:</strong>
        <ul>
          <li>admin: admin@example.com / admin123</li>
          <li>supplier: supplier@example.com / supplier123</li>
          <li>client: client@example.com / client123</li>
        </ul>
        <p>Use your registered emails/passwords if you already have accounts.</p>
        <p style={{ marginTop: 8, color: '#444' }}>
          Each login enforces the role saved on the account, so suppliers can only enter the supplier portal, clients the client portal, and admins the admin portal.
        </p>
      </div>
    </div>
  );
}
