/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FaNumber2CirclePaths from "./paths/FaNumber2Circle";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FaNumber2Circle = createSvgIcon(FaNumber2CirclePaths, "FaNumber2Circle") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FaNumber2Circle;
