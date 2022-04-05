/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatSubscriptPaths from "./paths/FormatSubscript";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatSubscript = createSvgIcon(FormatSubscriptPaths, "FormatSubscript") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatSubscript;
