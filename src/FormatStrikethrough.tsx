/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatStrikethroughPaths from "./paths/FormatStrikethrough";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatStrikethrough = createSvgIcon(FormatStrikethroughPaths, "FormatStrikethrough") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatStrikethrough;
