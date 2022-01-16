/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MopedOPaths from "./paths/MopedO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const MopedO = createSvgIcon(MopedOPaths, "MopedO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default MopedO;
