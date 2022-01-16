/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import HamburgerOPaths from "./paths/HamburgerO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const HamburgerO = createSvgIcon(HamburgerOPaths, "HamburgerO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default HamburgerO;
