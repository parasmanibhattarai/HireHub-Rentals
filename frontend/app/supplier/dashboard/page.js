'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SupplierDashboard() {
  const [ready, setReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userType = localStorage.getItem('userType');
    if (!token || userType !== 'supplier') {
      router.replace('/test-login');
      return;
    }
    setReady(true);
  }, [router]);

  if (!ready) return <p>Redirecting to login...</p>;

  return (
    <div style={{ padding: 24 }}>
      <h1>Supplier Dashboard (Test)</h1>
      <p>Welcome, Supplier — this is a simple test page.</p>
      <button onClick={() => { localStorage.clear(); router.push('/test-login'); }}>Logout</button>
    </div>
  );
}