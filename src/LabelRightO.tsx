/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LabelRightOPaths from "./paths/LabelRightO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const LabelRightO = createSvgIcon(LabelRightOPaths, "LabelRightO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default LabelRightO;
