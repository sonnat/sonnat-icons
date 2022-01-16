/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import InfoCirclePaths from "./paths/InfoCircle";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const InfoCircle = createSvgIcon(InfoCirclePaths, "InfoCircle") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default InfoCircle;
