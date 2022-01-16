/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import SkullPaths from "./paths/Skull";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Skull = createSvgIcon(SkullPaths, "Skull") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Skull;
