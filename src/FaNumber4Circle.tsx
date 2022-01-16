/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FaNumber4CirclePaths from "./paths/FaNumber4Circle";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FaNumber4Circle = createSvgIcon(FaNumber4CirclePaths, "FaNumber4Circle") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FaNumber4Circle;
