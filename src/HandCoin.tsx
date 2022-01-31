/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import HandCoinPaths from "./paths/HandCoin";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const HandCoin = createSvgIcon(HandCoinPaths, "HandCoin") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default HandCoin;
