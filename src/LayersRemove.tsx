/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LayersRemovePaths from "./paths/LayersRemove";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const LayersRemove = createSvgIcon(LayersRemovePaths, "LayersRemove") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default LayersRemove;
