/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatTextSerifPaths from "./paths/FormatTextSerif";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatTextSerif = createSvgIcon(FormatTextSerifPaths, "FormatTextSerif") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatTextSerif;
