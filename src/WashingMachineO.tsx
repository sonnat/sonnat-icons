/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import WashingMachineOPaths from "./paths/WashingMachineO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const WashingMachineO = createSvgIcon(WashingMachineOPaths, "WashingMachineO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default WashingMachineO;
