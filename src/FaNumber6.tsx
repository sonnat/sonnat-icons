/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FaNumber6Paths from "./paths/FaNumber6";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FaNumber6 = createSvgIcon(FaNumber6Paths, "FaNumber6") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FaNumber6;
