import { clsx, type ClassValue } from "clsx";
import { addDays, startOfWeek } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentWeekDates(): Date[] {
  const today = new Date();
  const weekStart = startOfWeek(today, { weekStartsOn: 1 });

  return Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
}
