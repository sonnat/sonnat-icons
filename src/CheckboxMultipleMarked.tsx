/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CheckboxMultipleMarkedPaths from "./paths/CheckboxMultipleMarked";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CheckboxMultipleMarked = createSvgIcon(CheckboxMultipleMarkedPaths, "CheckboxMultipleMarked") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CheckboxMultipleMarked;
