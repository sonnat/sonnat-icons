/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BusPaths from "./paths/Bus";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Bus = createSvgIcon(BusPaths, "Bus") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Bus;
