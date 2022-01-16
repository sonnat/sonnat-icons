/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatAlignCenterPaths from "./paths/FormatAlignCenter";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatAlignCenter = createSvgIcon(FormatAlignCenterPaths, "FormatAlignCenter") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatAlignCenter;
