/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MagnifierLargePaths from "./paths/MagnifierLarge";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const MagnifierLarge = createSvgIcon(MagnifierLargePaths, "MagnifierLarge") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default MagnifierLarge;
