import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import type { JSX } from "react";
import { Dashboard } from "./pages/Dashboard";
import { useAuth } from "./providers/AuthProvider";

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/admin" replace />;
}

const BASE_PATH = "/admin";

export default function RouterConfig() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>; // You can replace this with a proper loading component
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={BASE_PATH}
          element={
            isAuthenticated ? (
              <Navigate to={`${BASE_PATH}/dashboard`} replace />
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path={`${BASE_PATH}/dashboard`}
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
