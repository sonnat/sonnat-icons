/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FaNumber5Paths from "./paths/FaNumber5";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FaNumber5 = createSvgIcon(FaNumber5Paths, "FaNumber5") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FaNumber5;
