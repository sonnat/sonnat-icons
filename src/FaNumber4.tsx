/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FaNumber4Paths from "./paths/FaNumber4";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FaNumber4 = createSvgIcon(FaNumber4Paths, "FaNumber4") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FaNumber4;
