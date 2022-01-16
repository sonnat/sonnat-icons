/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ChairRollingPaths from "./paths/ChairRolling";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ChairRolling = createSvgIcon(ChairRollingPaths, "ChairRolling") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ChairRolling;
