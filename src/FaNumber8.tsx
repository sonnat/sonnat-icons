/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FaNumber8Paths from "./paths/FaNumber8";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FaNumber8 = createSvgIcon(FaNumber8Paths, "FaNumber8") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FaNumber8;
