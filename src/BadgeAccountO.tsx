/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BadgeAccountOPaths from "./paths/BadgeAccountO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const BadgeAccountO = createSvgIcon(BadgeAccountOPaths, "BadgeAccountO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default BadgeAccountO;
