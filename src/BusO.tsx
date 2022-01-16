/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BusOPaths from "./paths/BusO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const BusO = createSvgIcon(BusOPaths, "BusO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default BusO;
