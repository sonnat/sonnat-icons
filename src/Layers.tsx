/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LayersPaths from "./paths/Layers";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Layers = createSvgIcon(LayersPaths, "Layers") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Layers;
