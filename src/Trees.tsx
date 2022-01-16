/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TreesPaths from "./paths/Trees";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Trees = createSvgIcon(TreesPaths, "Trees") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Trees;
