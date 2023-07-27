import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-US').format(amount)
}

export function calculateDeadline(deadlineDate: Date) {
  const deadline = new Date(deadlineDate)
  const today = new Date()
  const timeDiff = deadline.getTime() - today.getTime()
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))
  return daysDiff
}