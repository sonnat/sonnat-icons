/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MathSquarePaths from "./paths/MathSquare";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const MathSquare = createSvgIcon(MathSquarePaths, "MathSquare") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default MathSquare;
