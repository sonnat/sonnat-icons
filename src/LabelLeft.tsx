/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LabelLeftPaths from "./paths/LabelLeft";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const LabelLeft = createSvgIcon(LabelLeftPaths, "LabelLeft") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default LabelLeft;
