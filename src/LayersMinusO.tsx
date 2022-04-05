/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LayersMinusOPaths from "./paths/LayersMinusO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const LayersMinusO = createSvgIcon(LayersMinusOPaths, "LayersMinusO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default LayersMinusO;
