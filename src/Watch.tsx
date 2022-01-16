/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import WatchPaths from "./paths/Watch";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Watch = createSvgIcon(WatchPaths, "Watch") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Watch;
