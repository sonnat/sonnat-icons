/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FaNumber7Paths from "./paths/FaNumber7";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FaNumber7 = createSvgIcon(FaNumber7Paths, "FaNumber7") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FaNumber7;
