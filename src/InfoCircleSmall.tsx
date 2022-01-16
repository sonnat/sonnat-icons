/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import InfoCircleSmallPaths from "./paths/InfoCircleSmall";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const InfoCircleSmall = createSvgIcon(InfoCircleSmallPaths, "InfoCircleSmall") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default InfoCircleSmall;
