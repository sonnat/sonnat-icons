/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import SortPaths from "./paths/Sort";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Sort = createSvgIcon(SortPaths, "Sort") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Sort;
