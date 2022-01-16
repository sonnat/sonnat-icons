/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CancelCirclePaths from "./paths/CancelCircle";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CancelCircle = createSvgIcon(CancelCirclePaths, "CancelCircle") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CancelCircle;
