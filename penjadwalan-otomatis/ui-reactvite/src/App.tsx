import { BrowserRouter, Route, Routes } from "react-router-dom";
import ILayout from "./components/ILayout";
import Dashboard from "./pages/Dashboard";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  // const { user } = useAuth();
  // if (!user) {
  //   // belum login → arahkan ke halaman login
  //   window.location.href = "/login";
  //   return null;
  // }
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Halaman tanpa layout */}
        <Route path="/login" element={<>LOGIN</>} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <ILayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="role" element={<>ROLES</>} />
          <Route path="jadwal" element={<>Jadwal</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
