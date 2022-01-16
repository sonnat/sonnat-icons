/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import SchoolPaths from "./paths/School";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const School = createSvgIcon(SchoolPaths, "School") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default School;
