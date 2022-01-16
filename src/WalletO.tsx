/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import WalletOPaths from "./paths/WalletO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const WalletO = createSvgIcon(WalletOPaths, "WalletO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default WalletO;
