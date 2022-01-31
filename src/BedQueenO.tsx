/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BedQueenOPaths from "./paths/BedQueenO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const BedQueenO = createSvgIcon(BedQueenOPaths, "BedQueenO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default BedQueenO;
