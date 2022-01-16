/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import AlarmOPaths from "./paths/AlarmO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const AlarmO = createSvgIcon(AlarmOPaths, "AlarmO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default AlarmO;
