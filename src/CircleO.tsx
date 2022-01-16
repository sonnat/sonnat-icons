/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CircleOPaths from "./paths/CircleO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CircleO = createSvgIcon(CircleOPaths, "CircleO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CircleO;
