/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import AccountTiePaths from "./paths/AccountTie";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const AccountTie = createSvgIcon(AccountTiePaths, "AccountTie") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default AccountTie;
