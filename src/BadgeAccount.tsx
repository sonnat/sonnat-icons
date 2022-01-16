/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BadgeAccountPaths from "./paths/BadgeAccount";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const BadgeAccount = createSvgIcon(BadgeAccountPaths, "BadgeAccount") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default BadgeAccount;
