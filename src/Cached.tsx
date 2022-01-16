/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CachedPaths from "./paths/Cached";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Cached = createSvgIcon(CachedPaths, "Cached") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Cached;
