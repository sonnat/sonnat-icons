/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LayersPlusOPaths from "./paths/LayersPlusO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const LayersPlusO = createSvgIcon(LayersPlusOPaths, "LayersPlusO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default LayersPlusO;
