import { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Home, Lock } from 'lucide-react';
import { isAdminAuthenticated, loginAdmin } from '@/blog/adminAuth';

export default function HousesAdminLogin() {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string } | null)?.from ?? '/houses/admin';

  if (isAdminAuthenticated()) {
    return <Navigate to={from} replace />;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginAdmin(pin)) {
      navigate(from, { replace: true });
      return;
    }
    setError('Incorrect PIN. Please try again.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 md:p-10">
        <div className="w-14 h-14 rounded-2xl bg-yellow-400 text-blue-950 flex items-center justify-center mb-6">
          <Lock className="w-7 h-7" />
        </div>
        <h1 className="text-2xl font-bold text-blue-900">Property Listings CMS</h1>
        <p className="text-gray-600 mt-2 text-sm">
          Sign in with your admin PIN to add houses going live on the homepage and link them to the
          auction platform.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
              Admin PIN
            </label>
            <input
              type="password"
              value={pin}
              onChange={e => setPin(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-900/10"
              placeholder="Enter PIN"
              autoComplete="current-password"
              required
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 font-medium" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 rounded-xl transition-colors"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500 space-y-2">
          <Link to="/" className="flex items-center justify-center gap-1 text-blue-900 font-semibold hover:text-yellow-600">
            <Home className="w-4 h-4" /> Back to homepage
          </Link>
          <Link to="/blog/admin" className="block text-gray-500 hover:text-blue-900">
            Blog CMS →
          </Link>
        </p>
      </div>
    </div>
  );
}
