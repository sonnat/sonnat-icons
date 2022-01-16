/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LabelRtlOPaths from "./paths/LabelRtlO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const LabelRtlO = createSvgIcon(LabelRtlOPaths, "LabelRtlO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default LabelRtlO;
