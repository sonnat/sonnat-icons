/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CheckDecogramPaths from "./paths/CheckDecogram";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CheckDecogram = createSvgIcon(CheckDecogramPaths, "CheckDecogram") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CheckDecogram;
