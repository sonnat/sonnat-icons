/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MouseThinPaths from "./paths/MouseThin";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const MouseThin = createSvgIcon(MouseThinPaths, "MouseThin") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default MouseThin;
