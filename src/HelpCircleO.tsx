/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import HelpCircleOPaths from "./paths/HelpCircleO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const HelpCircleO = createSvgIcon(HelpCircleOPaths, "HelpCircleO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default HelpCircleO;
