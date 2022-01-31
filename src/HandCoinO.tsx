/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import HandCoinOPaths from "./paths/HandCoinO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const HandCoinO = createSvgIcon(HandCoinOPaths, "HandCoinO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default HandCoinO;
