/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CompassLargeOPaths from "./paths/CompassLargeO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CompassLargeO = createSvgIcon(CompassLargeOPaths, "CompassLargeO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CompassLargeO;
