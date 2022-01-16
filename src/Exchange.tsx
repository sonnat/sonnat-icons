/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ExchangePaths from "./paths/Exchange";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Exchange = createSvgIcon(ExchangePaths, "Exchange") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Exchange;
