/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CellphoneIphonePaths from "./paths/CellphoneIphone";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CellphoneIphone = createSvgIcon(CellphoneIphonePaths, "CellphoneIphone") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CellphoneIphone;
