/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MouseThickPaths from "./paths/MouseThick";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const MouseThick = createSvgIcon(MouseThickPaths, "MouseThick") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default MouseThick;
