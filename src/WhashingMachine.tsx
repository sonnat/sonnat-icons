/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import WhashingMachinePaths from "./paths/WhashingMachine";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const WhashingMachine = createSvgIcon(WhashingMachinePaths, "WhashingMachine") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default WhashingMachine;
