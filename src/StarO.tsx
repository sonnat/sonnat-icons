/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import StarOPaths from "./paths/StarO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const StarO = createSvgIcon(StarOPaths, "StarO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default StarO;
