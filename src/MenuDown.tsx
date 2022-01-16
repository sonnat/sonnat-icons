/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MenuDownPaths from "./paths/MenuDown";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const MenuDown = createSvgIcon(MenuDownPaths, "MenuDown") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default MenuDown;
