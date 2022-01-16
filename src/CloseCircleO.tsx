/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CloseCircleOPaths from "./paths/CloseCircleO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CloseCircleO = createSvgIcon(CloseCircleOPaths, "CloseCircleO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CloseCircleO;
