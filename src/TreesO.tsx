/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TreesOPaths from "./paths/TreesO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const TreesO = createSvgIcon(TreesOPaths, "TreesO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default TreesO;
