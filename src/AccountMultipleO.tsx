/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import AccountMultipleOPaths from "./paths/AccountMultipleO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const AccountMultipleO = createSvgIcon(AccountMultipleOPaths, "AccountMultipleO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default AccountMultipleO;
