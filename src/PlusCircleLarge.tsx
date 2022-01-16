/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PlusCircleLargePaths from "./paths/PlusCircleLarge";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PlusCircleLarge = createSvgIcon(PlusCircleLargePaths, "PlusCircleLarge") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PlusCircleLarge;
