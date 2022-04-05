/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import AlignVerticalDistributePaths from "./paths/AlignVerticalDistribute";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const AlignVerticalDistribute = createSvgIcon(AlignVerticalDistributePaths, "AlignVerticalDistribute") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default AlignVerticalDistribute;
