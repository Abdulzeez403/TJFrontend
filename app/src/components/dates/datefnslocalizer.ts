import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS, fr } from "date-fns/locale"; // Named imports for locales
import { dateFnsLocalizer } from "react-big-calendar";

// Define locales object
const locales = {
  "en-US": enUS,
  fr, // French
};

// Create the localizer
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default localizer;
