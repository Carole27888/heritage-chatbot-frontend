
import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";

const timeZone = "Africa/Nairobi";


export function getHourAndMinutes(date?: Date | string): string {
  let newDate: Date;
  if (!date) {
    newDate = new Date();
  } else if (typeof date === "string") {
    newDate = new Date(date);
  } else {
    newDate = date;
  }

  const zoned = toZonedTime(newDate, timeZone);
  return format(zoned, "p"); 
}
