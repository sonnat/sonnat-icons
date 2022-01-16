/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import WatchOPaths from "./paths/WatchO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const WatchO = createSvgIcon(WatchOPaths, "WatchO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default WatchO;
