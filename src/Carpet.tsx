/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CarpetPaths from "./paths/Carpet";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Carpet = createSvgIcon(CarpetPaths, "Carpet") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Carpet;
