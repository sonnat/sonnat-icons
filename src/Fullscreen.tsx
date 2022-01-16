/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FullscreenPaths from "./paths/Fullscreen";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Fullscreen = createSvgIcon(FullscreenPaths, "Fullscreen") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Fullscreen;
