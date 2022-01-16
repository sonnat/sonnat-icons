/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import Rotate90Paths from "./paths/Rotate90";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Rotate90 = createSvgIcon(Rotate90Paths, "Rotate90") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Rotate90;
