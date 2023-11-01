import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function nc(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
