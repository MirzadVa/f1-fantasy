import { Navigate, useLocation } from 'react-router-dom';

interface IRoutePublicProps {
  isAuthenticated: boolean;
  to?: string;
  children: JSX.Element;
}

const RoutePrivate = ({ isAuthenticated, to = '/login', children }: IRoutePublicProps) => {
  const location = useLocation();
  return !isAuthenticated ? (
    <Navigate to={to} state={{ isAuthenticated, from: location }} replace />
  ) : (
    children
  );
};

export default RoutePrivate;
