/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CheckAllPaths from "./paths/CheckAll";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CheckAll = createSvgIcon(CheckAllPaths, "CheckAll") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CheckAll;
