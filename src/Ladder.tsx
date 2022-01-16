/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LadderPaths from "./paths/Ladder";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Ladder = createSvgIcon(LadderPaths, "Ladder") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Ladder;
