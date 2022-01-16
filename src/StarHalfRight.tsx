/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import StarHalfRightPaths from "./paths/StarHalfRight";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const StarHalfRight = createSvgIcon(StarHalfRightPaths, "StarHalfRight") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default StarHalfRight;
