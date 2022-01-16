/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ExitToAppPaths from "./paths/ExitToApp";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ExitToApp = createSvgIcon(ExitToAppPaths, "ExitToApp") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ExitToApp;
