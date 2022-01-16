/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CalendarTextPaths from "./paths/CalendarText";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CalendarText = createSvgIcon(CalendarTextPaths, "CalendarText") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CalendarText;
