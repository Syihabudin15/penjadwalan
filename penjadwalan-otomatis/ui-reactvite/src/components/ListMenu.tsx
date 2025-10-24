import { DashboardFilled, KeyOutlined, UserOutlined } from "@ant-design/icons";

interface MenuList {
  label: string;
  key: string;
  icon?: React.ReactNode;
}

const listMenu: MenuList[] = [
  {
    label: "Dashboard",
    key: "/",
    icon: <DashboardFilled />,
  },
  {
    label: "Role",
    key: "/role",
    icon: <KeyOutlined />,
  },
  {
    label: "Pengguna",
    key: "/pengguna",
    icon: <UserOutlined />,
  },
];

export default listMenu;
