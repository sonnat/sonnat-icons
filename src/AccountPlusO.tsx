/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import AccountPlusOPaths from "./paths/AccountPlusO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const AccountPlusO = createSvgIcon(AccountPlusOPaths, "AccountPlusO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default AccountPlusO;
