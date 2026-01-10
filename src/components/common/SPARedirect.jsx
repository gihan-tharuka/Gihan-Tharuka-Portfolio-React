import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SPARedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if this is a redirected SPA route from 404.html
    // The 404.html creates URLs like: domain.com/?/about
    if (location.search.startsWith('/?/')) {
      // Extract the path from the search string
      const spaPath = location.search.slice(2); // Remove the '/?' prefix
      const decodedPath = spaPath.replace(/~and~/g, '&');

      // Navigate to the clean route, replacing the current history entry
      navigate(decodedPath, { replace: true });
    }
  }, [location.search, navigate]);

  return null; // This component doesn't render anything
};

export default SPARedirect;
