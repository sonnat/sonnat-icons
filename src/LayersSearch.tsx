/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LayersSearchPaths from "./paths/LayersSearch";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const LayersSearch = createSvgIcon(LayersSearchPaths, "LayersSearch") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default LayersSearch;
