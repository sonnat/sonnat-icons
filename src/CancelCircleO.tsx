/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CancelCircleOPaths from "./paths/CancelCircleO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CancelCircleO = createSvgIcon(CancelCircleOPaths, "CancelCircleO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CancelCircleO;
