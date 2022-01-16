/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CalendarCurrencyUsdOPaths from "./paths/CalendarCurrencyUsdO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CalendarCurrencyUsdO = createSvgIcon(CalendarCurrencyUsdOPaths, "CalendarCurrencyUsdO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CalendarCurrencyUsdO;
