/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatHeader5Paths from "./paths/FormatHeader5";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatHeader5 = createSvgIcon(FormatHeader5Paths, "FormatHeader5") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatHeader5;
