/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CheckDecogramOPaths from "./paths/CheckDecogramO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CheckDecogramO = createSvgIcon(CheckDecogramOPaths, "CheckDecogramO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CheckDecogramO;
