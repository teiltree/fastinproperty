import { useParams, Navigate } from 'react-router-dom';
import DevelopmentPageView from './DevelopmentPageView';
import { getDevelopmentBySlug } from '@/sa-properties/developments';

export default function SaDevelopmentPage() {
  const { slug } = useParams<{ slug: string }>();
  const development = slug ? getDevelopmentBySlug(slug) : undefined;

  if (!development) {
    return <Navigate to="/south-africa-properties" replace />;
  }

  return <DevelopmentPageView development={development} />;
}
