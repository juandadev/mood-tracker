import { clsx, type ClassValue } from "clsx";
import { subDays } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLastNDays(days: number): Date[] {
  const today = new Date();

  return Array.from({ length: days }, (_, i) => {
    return subDays(today, days - i - 1);
  });
}
