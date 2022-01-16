/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CloseCircleLargeOPaths from "./paths/CloseCircleLargeO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CloseCircleLargeO = createSvgIcon(CloseCircleLargeOPaths, "CloseCircleLargeO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CloseCircleLargeO;
