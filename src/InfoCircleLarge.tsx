/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import InfoCircleLargePaths from "./paths/InfoCircleLarge";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const InfoCircleLarge = createSvgIcon(InfoCircleLargePaths, "InfoCircleLarge") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default InfoCircleLarge;
