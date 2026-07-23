import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { isAdminAuthenticated } from '@/blog/adminAuth';

export default function HousesAdminGuard() {
  const location = useLocation();

  if (!isAdminAuthenticated()) {
    return <Navigate to="/houses/admin/login" state={{ from: location.pathname }} replace />;
  }

  return <Outlet />;
}
