import React from "react";
import { Link } from "react-router-dom";

import { nc } from "../lib/utils";

interface SidebarItemProps {
  title: string;
  href: string;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ title, href, active }) => {
  return (
    <Link
      to={href}
      className={nc(
        `my-0.5 flex items-center border-b px-4 py-3 text-sm transition duration-150 ease-in-out md:rounded-r-full md:border-b-0 md:text-base ${
          !active && "hover:bg-hover/40"
        }`,
        active && "bg-primary/80 text-background font-bold",
      )}
    >
      {title === "Note" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`mr-2 h-5 w-5 md:mr-10 md:h-6 md:w-6 ${
            active ? "fill-background" : "fill-primary"
          }`}
        >
          <path d="M21 15L15 20.996L4.00221 21C3.4487 21 3 20.5551 3 20.0066V3.9934C3 3.44476 3.44495 3 3.9934 3H20.0066C20.5552 3 21 3.45576 21 4.00247V15ZM19 5H5V19H13V14C13 13.4872 13.386 13.0645 13.8834 13.0067L14 13L19 12.999V5ZM18.171 14.999L15 15V18.169L18.171 14.999Z"></path>
        </svg>
      )}

      {title === "Archived" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`mr-2 h-5 w-5 md:mr-10 md:h-6 md:w-6 ${
            active ? "fill-background" : "fill-primary"
          }`}
        >
          <path d="M20 3L22 7V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V7.00353L4 3H20ZM20 9H4V19H20V9ZM13 10V14H16L12 18L8 14H11V10H13ZM18.7639 5H5.23656L4.23744 7H19.7639L18.7639 5Z"></path>
        </svg>
      )}

      {title}
    </Link>
  );
};

export default SidebarItem;
