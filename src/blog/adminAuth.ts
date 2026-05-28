const SESSION_KEY = 'fastin_blog_admin_session';

export function getAdminPin(): string {
  return import.meta.env.VITE_BLOG_ADMIN_PIN ?? 'fastin2026';
}

export function isAdminAuthenticated(): boolean {
  return sessionStorage.getItem(SESSION_KEY) === '1';
}

export function loginAdmin(pin: string): boolean {
  if (pin !== getAdminPin()) return false;
  sessionStorage.setItem(SESSION_KEY, '1');
  return true;
}

export function logoutAdmin(): void {
  sessionStorage.removeItem(SESSION_KEY);
}
