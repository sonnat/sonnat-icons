/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import Rotate90OPaths from "./paths/Rotate90O";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Rotate90O = createSvgIcon(Rotate90OPaths, "Rotate90O") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Rotate90O;
