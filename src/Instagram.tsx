/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import InstagramPaths from "./paths/Instagram";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Instagram = createSvgIcon(InstagramPaths, "Instagram") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Instagram;
