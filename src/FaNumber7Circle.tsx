/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FaNumber7CirclePaths from "./paths/FaNumber7Circle";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FaNumber7Circle = createSvgIcon(FaNumber7CirclePaths, "FaNumber7Circle") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FaNumber7Circle;
