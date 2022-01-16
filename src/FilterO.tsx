/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FilterOPaths from "./paths/FilterO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FilterO = createSvgIcon(FilterOPaths, "FilterO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FilterO;
