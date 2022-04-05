/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatHeader2Paths from "./paths/FormatHeader2";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatHeader2 = createSvgIcon(FormatHeader2Paths, "FormatHeader2") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatHeader2;
