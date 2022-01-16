/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import AccountPaths from "./paths/Account";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Account = createSvgIcon(AccountPaths, "Account") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Account;
