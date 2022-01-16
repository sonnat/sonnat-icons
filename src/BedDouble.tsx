/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BedDoublePaths from "./paths/BedDouble";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const BedDouble = createSvgIcon(BedDoublePaths, "BedDouble") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default BedDouble;
