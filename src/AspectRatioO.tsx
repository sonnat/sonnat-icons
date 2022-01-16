/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import AspectRatioOPaths from "./paths/AspectRatioO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const AspectRatioO = createSvgIcon(AspectRatioOPaths, "AspectRatioO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default AspectRatioO;
