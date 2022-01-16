/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FilterPaths from "./paths/Filter";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Filter = createSvgIcon(FilterPaths, "Filter") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Filter;
