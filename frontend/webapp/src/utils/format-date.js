import th from "date-fns/locale/th";
import { format } from "date-fns";

export function formatDateThai(dateString) {
  const today = new Date();
  const date = new Date(dateString);
  const year = date.getFullYear() + 543;
 
  if (date.toDateString() === today.toDateString()) {
    return "วันนี้";
  }
 
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  if (date.toDateString() === yesterday.toDateString()) {
    return "เมื่อวาน";
  }

  return format(date, "EEE dd MMM ", { locale: th }) + year;
}