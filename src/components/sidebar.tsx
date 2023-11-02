import { useLocation } from "react-router-dom";
import SidebarItem from "./sidebar-item";
import { useMemo } from "react";

const Sidebar = () => {
  const { pathname } = useLocation();

  const routes = useMemo(
    () => [
      {
        title: "Note",
        href: "/",
        active: pathname !== "/archived",
      },
      {
        title: "Archived",
        href: "/archived",
        active: pathname === "/archived",
      },
    ],
    [pathname],
  );

  return (
    <nav className="md:w-[300px] md:border-r md:py-4 md:pr-4">
      {routes.map((route) => (
        <SidebarItem
          key={route.title}
          title={route.title}
          href={route.href}
          active={route.active}
        />
      ))}
    </nav>
  );
};

export default Sidebar;
