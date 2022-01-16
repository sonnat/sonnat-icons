/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import HammerScrewdriverOPaths from "./paths/HammerScrewdriverO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const HammerScrewdriverO = createSvgIcon(HammerScrewdriverOPaths, "HammerScrewdriverO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default HammerScrewdriverO;
