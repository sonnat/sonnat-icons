/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PencilRulerOPaths from "./paths/PencilRulerO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PencilRulerO = createSvgIcon(PencilRulerOPaths, "PencilRulerO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PencilRulerO;
