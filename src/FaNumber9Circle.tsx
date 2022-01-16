/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FaNumber9CirclePaths from "./paths/FaNumber9Circle";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FaNumber9Circle = createSvgIcon(FaNumber9CirclePaths, "FaNumber9Circle") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FaNumber9Circle;
