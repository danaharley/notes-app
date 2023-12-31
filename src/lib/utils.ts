import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export interface Note {
  id: number | string;
  title: string;
  body: string;
  archived: boolean;
  createdAt: string;
}

export function nc(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateId = () => {
  return +new Date();
};

export const generateDate = () => {
  return new Date().toISOString();
};

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("id", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const formObject = ({ id, title, body, archived, createdAt }: Note) => {
  return {
    id,
    title,
    body,
    archived,
    createdAt,
  };
};
