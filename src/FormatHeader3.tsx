/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatHeader3Paths from "./paths/FormatHeader3";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatHeader3 = createSvgIcon(FormatHeader3Paths, "FormatHeader3") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatHeader3;
