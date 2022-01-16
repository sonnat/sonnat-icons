/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import HammerScrewdriverPaths from "./paths/HammerScrewdriver";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const HammerScrewdriver = createSvgIcon(HammerScrewdriverPaths, "HammerScrewdriver") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default HammerScrewdriver;
