/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MouseThickOPaths from "./paths/MouseThickO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const MouseThickO = createSvgIcon(MouseThickOPaths, "MouseThickO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default MouseThickO;
