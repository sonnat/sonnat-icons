/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import AccountMultiplePaths from "./paths/AccountMultiple";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const AccountMultiple = createSvgIcon(AccountMultiplePaths, "AccountMultiple") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default AccountMultiple;
