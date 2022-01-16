/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MenuUpPaths from "./paths/MenuUp";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const MenuUp = createSvgIcon(MenuUpPaths, "MenuUp") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default MenuUp;
