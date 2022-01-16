/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import AlertPaths from "./paths/Alert";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Alert = createSvgIcon(AlertPaths, "Alert") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Alert;
