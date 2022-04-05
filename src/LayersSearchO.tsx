/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LayersSearchOPaths from "./paths/LayersSearchO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const LayersSearchO = createSvgIcon(LayersSearchOPaths, "LayersSearchO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default LayersSearchO;
