/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CheckboxBlankPaths from "./paths/CheckboxBlank";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CheckboxBlank = createSvgIcon(CheckboxBlankPaths, "CheckboxBlank") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CheckboxBlank;
