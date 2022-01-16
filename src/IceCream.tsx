/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import IceCreamPaths from "./paths/IceCream";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const IceCream = createSvgIcon(IceCreamPaths, "IceCream") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default IceCream;
