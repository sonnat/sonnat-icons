/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FaNumber1CirclePaths from "./paths/FaNumber1Circle";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FaNumber1Circle = createSvgIcon(FaNumber1CirclePaths, "FaNumber1Circle") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FaNumber1Circle;
