/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MathSquareOPaths from "./paths/MathSquareO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const MathSquareO = createSvgIcon(MathSquareOPaths, "MathSquareO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default MathSquareO;
