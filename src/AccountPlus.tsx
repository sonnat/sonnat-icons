/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import AccountPlusPaths from "./paths/AccountPlus";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const AccountPlus = createSvgIcon(AccountPlusPaths, "AccountPlus") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default AccountPlus;
