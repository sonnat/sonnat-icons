/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatHeader1Paths from "./paths/FormatHeader1";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatHeader1 = createSvgIcon(FormatHeader1Paths, "FormatHeader1") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatHeader1;
