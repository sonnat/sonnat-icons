/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ThumbDownOPaths from "./paths/ThumbDownO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ThumbDownO = createSvgIcon(ThumbDownOPaths, "ThumbDownO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ThumbDownO;
