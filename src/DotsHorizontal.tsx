/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import DotsHorizontalPaths from "./paths/DotsHorizontal";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const DotsHorizontal = createSvgIcon(DotsHorizontalPaths, "DotsHorizontal") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default DotsHorizontal;
