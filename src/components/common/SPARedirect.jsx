import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SPARedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if this is a redirected SPA route from 404.html
    const searchParams = new URLSearchParams(location.search);
    const spaPath = searchParams.get('/');

    if (spaPath) {
      // Remove the leading slash if present and decode the path
      const cleanPath = spaPath.startsWith('/') ? spaPath : `/${spaPath}`;
      const decodedPath = cleanPath.replace(/~and~/g, '&');

      // Navigate to the clean route, replacing the current history entry
      navigate(decodedPath, { replace: true });
    }
  }, [location.search, navigate]);

  return null; // This component doesn't render anything
};

export default SPARedirect;
