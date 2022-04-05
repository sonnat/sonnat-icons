/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import RollupjsPaths from "./paths/Rollupjs";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Rollupjs = createSvgIcon(RollupjsPaths, "Rollupjs") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Rollupjs;
