/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatTextBoldPaths from "./paths/FormatTextBold";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatTextBold = createSvgIcon(FormatTextBoldPaths, "FormatTextBold") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatTextBold;
