/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import AlignHorizontalLeftPaths from "./paths/AlignHorizontalLeft";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const AlignHorizontalLeft = createSvgIcon(AlignHorizontalLeftPaths, "AlignHorizontalLeft") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default AlignHorizontalLeft;
