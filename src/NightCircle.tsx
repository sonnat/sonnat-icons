/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import NightCirclePaths from "./paths/NightCircle";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const NightCircle = createSvgIcon(NightCirclePaths, "NightCircle") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default NightCircle;
