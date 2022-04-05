/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import SortDescendingPaths from "./paths/SortDescending";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const SortDescending = createSvgIcon(SortDescendingPaths, "SortDescending") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default SortDescending;
