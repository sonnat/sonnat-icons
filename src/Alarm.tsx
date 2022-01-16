/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import AlarmPaths from "./paths/Alarm";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Alarm = createSvgIcon(AlarmPaths, "Alarm") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Alarm;
