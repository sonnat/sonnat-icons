/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LayersMinusPaths from "./paths/LayersMinus";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const LayersMinus = createSvgIcon(LayersMinusPaths, "LayersMinus") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default LayersMinus;
