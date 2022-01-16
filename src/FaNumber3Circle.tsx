/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FaNumber3CirclePaths from "./paths/FaNumber3Circle";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FaNumber3Circle = createSvgIcon(FaNumber3CirclePaths, "FaNumber3Circle") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FaNumber3Circle;
