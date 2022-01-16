/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FaNumber1Paths from "./paths/FaNumber1";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FaNumber1 = createSvgIcon(FaNumber1Paths, "FaNumber1") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FaNumber1;
