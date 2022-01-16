/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LabelRtlPaths from "./paths/LabelRtl";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const LabelRtl = createSvgIcon(LabelRtlPaths, "LabelRtl") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default LabelRtl;
