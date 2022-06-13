import { Navigate, useLocation } from 'react-router-dom';

interface IRoutePublicProps {
  isAuthenticated: boolean;
  to?: string;
  children: JSX.Element;
}

const RoutePublic = ({ isAuthenticated, to = '/', children }: IRoutePublicProps) => {
  const location = useLocation();
  const from = (location.state as any)?.from.pathname;
  return isAuthenticated ? <Navigate to={{ pathname: from || to }} replace /> : children;
};

export default RoutePublic;
