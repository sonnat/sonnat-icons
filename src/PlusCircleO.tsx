/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PlusCircleOPaths from "./paths/PlusCircleO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PlusCircleO = createSvgIcon(PlusCircleOPaths, "PlusCircleO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PlusCircleO;
