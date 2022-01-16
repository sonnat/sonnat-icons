/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import InfoCircleLargeOPaths from "./paths/InfoCircleLargeO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const InfoCircleLargeO = createSvgIcon(InfoCircleLargeOPaths, "InfoCircleLargeO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default InfoCircleLargeO;
