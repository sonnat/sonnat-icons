/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FaNumber3Paths from "./paths/FaNumber3";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FaNumber3 = createSvgIcon(FaNumber3Paths, "FaNumber3") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FaNumber3;
