/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import AlignHorizontalCenterPaths from "./paths/AlignHorizontalCenter";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const AlignHorizontalCenter = createSvgIcon(AlignHorizontalCenterPaths, "AlignHorizontalCenter") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default AlignHorizontalCenter;
