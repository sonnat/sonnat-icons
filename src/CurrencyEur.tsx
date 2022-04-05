/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CurrencyEurPaths from "./paths/CurrencyEur";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CurrencyEur = createSvgIcon(CurrencyEurPaths, "CurrencyEur") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CurrencyEur;
