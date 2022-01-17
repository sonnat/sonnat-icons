/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CheckboxMarkedPaths from "./paths/CheckboxMarked";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CheckboxMarked = createSvgIcon(CheckboxMarkedPaths, "CheckboxMarked") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CheckboxMarked;
