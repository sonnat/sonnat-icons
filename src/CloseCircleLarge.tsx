/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CloseCircleLargePaths from "./paths/CloseCircleLarge";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CloseCircleLarge = createSvgIcon(CloseCircleLargePaths, "CloseCircleLarge") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CloseCircleLarge;
