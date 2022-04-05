/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatSizePaths from "./paths/FormatSize";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatSize = createSvgIcon(FormatSizePaths, "FormatSize") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatSize;
