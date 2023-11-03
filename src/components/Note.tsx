import React from "react";
import { useLocation } from "react-router-dom";
import { formatDate } from "../lib/utils";

interface Note {
  title: string;
  body: string;
  createdAt: string;
  onArchived: () => void;
  onDelete: () => void;
}

const Note: React.FC<Note> = ({
  title,
  body,
  createdAt,
  onArchived,
  onDelete,
}) => {
  const { pathname } = useLocation();

  return (
    <div className="space-y-4 rounded border p-4 transition duration-200 ease-in-out hover:scale-105 hover:bg-hover/20 hover:shadow-sm hover:duration-300">
      <h1 className="font-bold md:text-lg">{title}</h1>
      <span className="text-xs text-zinc-400/80 sm:text-sm">
        {formatDate(createdAt)}
      </span>
      <p className="text-sm md:text-base">{body}</p>

      <div className="flex items-center justify-end space-x-2.5">
        {pathname === "/archived" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-5 w-5 fill-yellow-500 hover:cursor-pointer"
            onClick={onArchived}
          >
            <path d="M20 3L22 7V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V7.00353L4 3H20ZM20 9H4V19H20V9ZM12 10L16 14H13V18H11V14H8L12 10ZM18.764 5H5.236L4.237 7H19.764L18.764 5Z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-5 w-5 fill-zinc-500 hover:cursor-pointer"
            onClick={onArchived}
          >
            <path d="M20 3L22 7V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V7.00353L4 3H20ZM20 9H4V19H20V9ZM13 10V14H16L12 18L8 14H11V10H13ZM18.7639 5H5.23656L4.23744 7H19.7639L18.7639 5Z"></path>
          </svg>
        )}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-destructive hover:cursor-pointer"
          onClick={onDelete}
        >
          <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Note;
