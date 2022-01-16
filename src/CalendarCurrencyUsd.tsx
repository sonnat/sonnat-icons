/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CalendarCurrencyUsdPaths from "./paths/CalendarCurrencyUsd";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CalendarCurrencyUsd = createSvgIcon(CalendarCurrencyUsdPaths, "CalendarCurrencyUsd") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CalendarCurrencyUsd;
