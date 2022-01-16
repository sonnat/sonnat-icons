/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import AndroidPaths from "./paths/Android";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Android = createSvgIcon(AndroidPaths, "Android") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Android;
