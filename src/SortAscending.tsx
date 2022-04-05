/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import SortAscendingPaths from "./paths/SortAscending";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const SortAscending = createSvgIcon(SortAscendingPaths, "SortAscending") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default SortAscending;
