/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BurgerMenuPaths from "./paths/BurgerMenu";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const BurgerMenu = createSvgIcon(BurgerMenuPaths, "BurgerMenu") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default BurgerMenu;
