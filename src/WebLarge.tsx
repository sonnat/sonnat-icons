/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import WebLargePaths from "./paths/WebLarge";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const WebLarge = createSvgIcon(WebLargePaths, "WebLarge") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default WebLarge;
