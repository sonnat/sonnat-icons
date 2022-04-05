/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import AlignHorizontalDistributePaths from "./paths/AlignHorizontalDistribute";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const AlignHorizontalDistribute = createSvgIcon(AlignHorizontalDistributePaths, "AlignHorizontalDistribute") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default AlignHorizontalDistribute;
