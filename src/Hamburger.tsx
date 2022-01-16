/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import HamburgerPaths from "./paths/Hamburger";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Hamburger = createSvgIcon(HamburgerPaths, "Hamburger") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Hamburger;
