/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FaNumber9Paths from "./paths/FaNumber9";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FaNumber9 = createSvgIcon(FaNumber9Paths, "FaNumber9") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FaNumber9;
