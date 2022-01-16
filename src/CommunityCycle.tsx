/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CommunityCyclePaths from "./paths/CommunityCycle";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CommunityCycle = createSvgIcon(CommunityCyclePaths, "CommunityCycle") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CommunityCycle;
