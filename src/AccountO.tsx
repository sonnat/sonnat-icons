/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import AccountOPaths from "./paths/AccountO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const AccountO = createSvgIcon(AccountOPaths, "AccountO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default AccountO;
