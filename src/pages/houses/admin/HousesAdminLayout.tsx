import { Link, NavLink, Outlet } from 'react-router-dom';
import { Home, LogOut, Settings } from 'lucide-react';
import { logoutAdmin } from '@/blog/adminAuth';
import { useNavigate } from 'react-router-dom';

const navClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
    isActive ? 'bg-yellow-400 text-blue-950' : 'text-blue-100 hover:bg-white/10'
  }`;

export default function HousesAdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutAdmin();
    navigate('/houses/admin/login');
  };

  return (
    <div className="min-h-screen bg-slate-100 flex">
      <aside className="w-64 bg-gradient-to-b from-blue-900 to-blue-950 text-white p-6 flex flex-col shrink-0">
        <Link to="/" className="block mb-8">
          <img src="/logo.png" alt="Fastin" className="h-12 rounded-lg" />
          <p className="text-xs font-bold tracking-widest uppercase text-yellow-400 mt-3">
            Property Listings
          </p>
        </Link>

        <nav className="space-y-1 flex-1">
          <NavLink to="/houses/admin" end className={navClass}>
            <Home className="w-4 h-4" /> Listings
          </NavLink>
          <NavLink to="/houses/admin/settings" className={navClass}>
            <Settings className="w-4 h-4" /> Settings
          </NavLink>
        </nav>

        <div className="pt-6 border-t border-white/10 space-y-2">
          <Link to="/" className="block text-sm text-blue-200 hover:text-yellow-400 px-4">
            View homepage →
          </Link>
          <Link to="/blog/admin" className="block text-sm text-blue-200 hover:text-yellow-400 px-4">
            Blog CMS →
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm text-blue-200 hover:text-white px-4 py-2 w-full"
          >
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <div className="max-w-5xl mx-auto p-6 md:p-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
