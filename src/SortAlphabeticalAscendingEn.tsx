/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import SortAlphabeticalAscendingEnPaths from "./paths/SortAlphabeticalAscendingEn";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const SortAlphabeticalAscendingEn = createSvgIcon(SortAlphabeticalAscendingEnPaths, "SortAlphabeticalAscendingEn") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default SortAlphabeticalAscendingEn;
