/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PlusCirclePaths from "./paths/PlusCircle";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PlusCircle = createSvgIcon(PlusCirclePaths, "PlusCircle") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PlusCircle;
