/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BabyPaths from "./paths/Baby";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Baby = createSvgIcon(BabyPaths, "Baby") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Baby;
