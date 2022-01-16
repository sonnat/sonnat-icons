/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CheckCellphoneIphonePaths from "./paths/CheckCellphoneIphone";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CheckCellphoneIphone = createSvgIcon(CheckCellphoneIphonePaths, "CheckCellphoneIphone") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CheckCellphoneIphone;
