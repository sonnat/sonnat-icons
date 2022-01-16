/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PolicePaths from "./paths/Police";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Police = createSvgIcon(PolicePaths, "Police") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Police;
