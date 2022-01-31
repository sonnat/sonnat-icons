/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BedKingPaths from "./paths/BedKing";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const BedKing = createSvgIcon(BedKingPaths, "BedKing") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default BedKing;
