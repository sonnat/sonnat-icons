/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CashLineVerticalPaths from "./paths/CashLineVertical";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CashLineVertical = createSvgIcon(CashLineVerticalPaths, "CashLineVertical") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CashLineVertical;
