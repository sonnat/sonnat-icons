/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ThumbUpOPaths from "./paths/ThumbUpO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ThumbUpO = createSvgIcon(ThumbUpOPaths, "ThumbUpO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ThumbUpO;
