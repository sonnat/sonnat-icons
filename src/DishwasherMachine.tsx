/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import DishwasherMachinePaths from "./paths/DishwasherMachine";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const DishwasherMachine = createSvgIcon(DishwasherMachinePaths, "DishwasherMachine") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default DishwasherMachine;
