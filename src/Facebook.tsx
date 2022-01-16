/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FacebookPaths from "./paths/Facebook";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Facebook = createSvgIcon(FacebookPaths, "Facebook") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Facebook;
