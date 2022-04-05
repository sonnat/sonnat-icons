/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CheckboxMultipleBlankPaths from "./paths/CheckboxMultipleBlank";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CheckboxMultipleBlank = createSvgIcon(CheckboxMultipleBlankPaths, "CheckboxMultipleBlank") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CheckboxMultipleBlank;
