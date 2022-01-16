/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LabelPaths from "./paths/Label";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Label = createSvgIcon(LabelPaths, "Label") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Label;
