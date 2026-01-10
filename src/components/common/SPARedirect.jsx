import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SPARedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // GitHub Pages redirect creates URLs like ?/about
    if (location.search.startsWith("?/")) {
      const spaPath = location.search.slice(2); // remove "?/"
      const decodedPath = spaPath.replace(/~and~/g, "&");

      navigate(`/${decodedPath}`, { replace: true });
    }
  }, [location.search, navigate]);

  return null;
};

export default SPARedirect;
