/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BugPaths from "./paths/Bug";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Bug = createSvgIcon(BugPaths, "Bug") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Bug;
