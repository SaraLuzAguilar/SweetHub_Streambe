import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface PrivateRouteProps {
  children: React.ReactNode;
}

/**
 * Este componente protege rutas que requieren usuario autenticado.
 * Si no hay token → redirige al login.
 * Si hay token → renderiza el contenido protegido.
 */
export function PrivateRoute({ children }: PrivateRouteProps) {
  const { token, loading } = useAuth();

  // Evita parpadeos al cargar
  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-gray-600">
        Cargando...
      </div>
    );
  }

  // Si no hay token, redirigir al login
  if (!token) {
    return <Navigate to="/auth" replace />;
  }

  // Usuario autenticado → mostrar contenido
  return <>{children}</>;
}
