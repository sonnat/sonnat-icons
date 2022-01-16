/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import NightCircleOPaths from "./paths/NightCircleO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const NightCircleO = createSvgIcon(NightCircleOPaths, "NightCircleO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default NightCircleO;
