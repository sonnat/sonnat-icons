/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import AlignVerticalBottomPaths from "./paths/AlignVerticalBottom";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const AlignVerticalBottom = createSvgIcon(AlignVerticalBottomPaths, "AlignVerticalBottom") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default AlignVerticalBottom;
