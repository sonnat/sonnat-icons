/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import StarHalfLeftPaths from "./paths/StarHalfLeft";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const StarHalfLeft = createSvgIcon(StarHalfLeftPaths, "StarHalfLeft") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default StarHalfLeft;
