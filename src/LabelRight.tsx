/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LabelRightPaths from "./paths/LabelRight";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const LabelRight = createSvgIcon(LabelRightPaths, "LabelRight") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default LabelRight;
