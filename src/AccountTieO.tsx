/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import AccountTieOPaths from "./paths/AccountTieO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const AccountTieO = createSvgIcon(AccountTieOPaths, "AccountTieO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default AccountTieO;
