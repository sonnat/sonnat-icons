/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import WifiPaths from "./paths/Wifi";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Wifi = createSvgIcon(WifiPaths, "Wifi") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Wifi;
