/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import StethoscopeOPaths from "./paths/StethoscopeO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const StethoscopeO = createSvgIcon(StethoscopeOPaths, "StethoscopeO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default StethoscopeO;
