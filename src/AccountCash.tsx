/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import AccountCashPaths from "./paths/AccountCash";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const AccountCash = createSvgIcon(AccountCashPaths, "AccountCash") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default AccountCash;
