/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ControllerPaths from "./paths/Controller";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Controller = createSvgIcon(ControllerPaths, "Controller") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Controller;
