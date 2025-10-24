import { useContext } from "react";
import AuthContext from "./AuthContext";

export const useAuth = () => useContext(AuthContext);

export function useAccess(path: string) {
  const { menus } = useAuth();
  const menu = menus.find((m) => m.path === path);
  if (!menu) return {};

  return {
    canRead: menu.akses.includes("read"),
    canWrite: menu.akses.includes("write"),
    canUpdate: menu.akses.includes("update"),
    canDelete: menu.akses.includes("delete"),
    canProses: menu.akses.includes("proses"),
  };
}
