/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LayersRemoveOPaths from "./paths/LayersRemoveO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const LayersRemoveO = createSvgIcon(LayersRemoveOPaths, "LayersRemoveO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default LayersRemoveO;
