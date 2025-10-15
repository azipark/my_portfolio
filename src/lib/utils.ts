import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  const { twMerge } = require("tailwind-merge");
  return twMerge(clsx(inputs));
}
