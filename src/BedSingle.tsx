/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BedSinglePaths from "./paths/BedSingle";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const BedSingle = createSvgIcon(BedSinglePaths, "BedSingle") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default BedSingle;
