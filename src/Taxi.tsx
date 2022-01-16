/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TaxiPaths from "./paths/Taxi";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Taxi = createSvgIcon(TaxiPaths, "Taxi") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Taxi;
