/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TruckOPaths from "./paths/TruckO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const TruckO = createSvgIcon(TruckOPaths, "TruckO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default TruckO;
