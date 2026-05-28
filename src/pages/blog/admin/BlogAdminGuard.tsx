import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { isAdminAuthenticated } from '@/blog/adminAuth';

export default function BlogAdminGuard() {
  const location = useLocation();

  if (!isAdminAuthenticated()) {
    return <Navigate to="/blog/admin/login" state={{ from: location.pathname }} replace />;
  }

  return <Outlet />;
}
