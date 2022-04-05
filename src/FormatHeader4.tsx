/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatHeader4Paths from "./paths/FormatHeader4";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatHeader4 = createSvgIcon(FormatHeader4Paths, "FormatHeader4") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatHeader4;
