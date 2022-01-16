/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FaNumber5CirclePaths from "./paths/FaNumber5Circle";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FaNumber5Circle = createSvgIcon(FaNumber5CirclePaths, "FaNumber5Circle") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FaNumber5Circle;
