/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FlagPaths from "./paths/Flag";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Flag = createSvgIcon(FlagPaths, "Flag") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Flag;
