/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import AlertOctagonPaths from "./paths/AlertOctagon";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const AlertOctagon = createSvgIcon(AlertOctagonPaths, "AlertOctagon") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default AlertOctagon;
