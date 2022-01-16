/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CameraPaths from "./paths/Camera";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Camera = createSvgIcon(CameraPaths, "Camera") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Camera;
