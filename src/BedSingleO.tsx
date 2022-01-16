/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BedSingleOPaths from "./paths/BedSingleO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const BedSingleO = createSvgIcon(BedSingleOPaths, "BedSingleO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default BedSingleO;
