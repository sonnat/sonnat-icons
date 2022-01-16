/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import AlertCircleOPaths from "./paths/AlertCircleO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const AlertCircleO = createSvgIcon(AlertCircleOPaths, "AlertCircleO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default AlertCircleO;
