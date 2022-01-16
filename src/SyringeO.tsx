/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import SyringeOPaths from "./paths/SyringeO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const SyringeO = createSvgIcon(SyringeOPaths, "SyringeO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default SyringeO;
