/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatTextPaths from "./paths/FormatText";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatText = createSvgIcon(FormatTextPaths, "FormatText") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatText;
