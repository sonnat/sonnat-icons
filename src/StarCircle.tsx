/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import StarCirclePaths from "./paths/StarCircle";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const StarCircle = createSvgIcon(StarCirclePaths, "StarCircle") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default StarCircle;
