/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import AlignVerticalCenterPaths from "./paths/AlignVerticalCenter";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const AlignVerticalCenter = createSvgIcon(AlignVerticalCenterPaths, "AlignVerticalCenter") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default AlignVerticalCenter;
