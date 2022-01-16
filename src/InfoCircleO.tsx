/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import InfoCircleOPaths from "./paths/InfoCircleO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const InfoCircleO = createSvgIcon(InfoCircleOPaths, "InfoCircleO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default InfoCircleO;
