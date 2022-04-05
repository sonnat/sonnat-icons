/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatTitlePaths from "./paths/FormatTitle";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatTitle = createSvgIcon(FormatTitlePaths, "FormatTitle") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatTitle;
