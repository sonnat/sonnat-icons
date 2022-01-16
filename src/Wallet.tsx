/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import WalletPaths from "./paths/Wallet";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Wallet = createSvgIcon(WalletPaths, "Wallet") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Wallet;
