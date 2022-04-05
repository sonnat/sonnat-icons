/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatHeader6Paths from "./paths/FormatHeader6";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatHeader6 = createSvgIcon(FormatHeader6Paths, "FormatHeader6") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatHeader6;
