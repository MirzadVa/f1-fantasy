import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RoutePublic from 'container/RoutePublic';
import RoutePrivate from 'container/RoutePrivate';

import Login from './auth/Login';
import Home from './home';

const RoutesContainer = () => {
  const [isAuthenticated] = useState<boolean>(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <RoutePublic isAuthenticated={isAuthenticated}>
              <Login />
            </RoutePublic>
          }
        />
        <Route
          path="/"
          element={
            <RoutePrivate isAuthenticated={isAuthenticated}>
              <Home />
            </RoutePrivate>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesContainer;
