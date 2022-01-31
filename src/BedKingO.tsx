/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BedKingOPaths from "./paths/BedKingO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const BedKingO = createSvgIcon(BedKingOPaths, "BedKingO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default BedKingO;
