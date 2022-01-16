/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import AlertCirclePaths from "./paths/AlertCircle";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const AlertCircle = createSvgIcon(AlertCirclePaths, "AlertCircle") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default AlertCircle;
