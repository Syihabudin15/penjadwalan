import { createContext, useCallback, useEffect, useState } from "react";
import { api } from "./libs";
import type { IMenu, IUser } from "../IInterfaces";

interface AuthContextType {
  user: IUser | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  menus: IMenu[];
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  menus: [],
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const [menus, setMenus] = useState<IMenu[]>([]);

  const login = async (email: string, password: string) => {
    const { data } = await api.post("/login", { email, password });
    localStorage.setItem("token", data.token);
    await fetchUser();
  };

  const fetchUser = useCallback(async () => {
    try {
      //   const { data } = await api.get("/me");
      //   setUser(data);
      //   const allMenu = data.role.flatMap((r: IRole) => r.menu);
      const allMenu = [
        {
          id: 1,
          nama: "Dashboard",
          path: "/",
          akses: ["read", "write", "update", "delete"],
          role_id: 1,
        },
        {
          id: 2,
          nama: "Role",
          path: "/role",
          akses: ["read", "write", "update", "delete"],
          role_id: 1,
        },
      ];
      setMenus(allMenu);
    } catch (err) {
      console.error(err);
      logout();
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setMenus([]);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) fetchUser();
  }, [fetchUser]);

  return (
    <AuthContext.Provider value={{ user, menus, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
