/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import EraserOPaths from "./paths/EraserO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const EraserO = createSvgIcon(EraserOPaths, "EraserO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default EraserO;
