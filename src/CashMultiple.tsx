/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CashMultiplePaths from "./paths/CashMultiple";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CashMultiple = createSvgIcon(CashMultiplePaths, "CashMultiple") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CashMultiple;
