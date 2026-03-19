import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(amount);
}

export function truncate(str: string, length: number): string {
  return str.length > length ? `${str.slice(0, length)}...` : str;
}

export function getRiskColor(risk: "critical" | "medium" | "safe" | "low") {
  switch (risk) {
    case "critical":
      return {
        bg: "bg-red-50 dark:bg-red-950/30",
        border: "border-red-200 dark:border-red-800",
        text: "text-red-700 dark:text-red-400",
        badge: "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300",
        dot: "bg-red-500",
        icon: "text-red-500",
      };
    case "medium":
      return {
        bg: "bg-orange-50 dark:bg-orange-950/30",
        border: "border-orange-200 dark:border-orange-800",
        text: "text-orange-700 dark:text-orange-400",
        badge: "bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300",
        dot: "bg-orange-500",
        icon: "text-orange-500",
      };
    case "safe":
    case "low":
      return {
        bg: "bg-green-50 dark:bg-green-950/30",
        border: "border-green-200 dark:border-green-800",
        text: "text-green-700 dark:text-green-400",
        badge: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300",
        dot: "bg-green-500",
        icon: "text-green-500",
      };
  }
}
