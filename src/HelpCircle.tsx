/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import HelpCirclePaths from "./paths/HelpCircle";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const HelpCircle = createSvgIcon(HelpCirclePaths, "HelpCircle") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default HelpCircle;
