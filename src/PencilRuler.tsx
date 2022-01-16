/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PencilRulerPaths from "./paths/PencilRuler";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PencilRuler = createSvgIcon(PencilRulerPaths, "PencilRuler") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PencilRuler;
