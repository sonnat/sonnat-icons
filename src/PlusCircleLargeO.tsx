/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PlusCircleLargeOPaths from "./paths/PlusCircleLargeO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PlusCircleLargeO = createSvgIcon(PlusCircleLargeOPaths, "PlusCircleLargeO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PlusCircleLargeO;
