/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import AspectRatioPaths from "./paths/AspectRatio";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const AspectRatio = createSvgIcon(AspectRatioPaths, "AspectRatio") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default AspectRatio;
