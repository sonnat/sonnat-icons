/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import StarCircleOPaths from "./paths/StarCircleO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const StarCircleO = createSvgIcon(StarCircleOPaths, "StarCircleO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default StarCircleO;
