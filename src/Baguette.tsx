/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BaguettePaths from "./paths/Baguette";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Baguette = createSvgIcon(BaguettePaths, "Baguette") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Baguette;
