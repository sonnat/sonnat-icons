/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FaNumber2Paths from "./paths/FaNumber2";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FaNumber2 = createSvgIcon(FaNumber2Paths, "FaNumber2") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FaNumber2;
