/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CirclePaths from "./paths/Circle";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Circle = createSvgIcon(CirclePaths, "Circle") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Circle;
