/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MagnifierPaths from "./paths/Magnifier";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Magnifier = createSvgIcon(MagnifierPaths, "Magnifier") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Magnifier;
