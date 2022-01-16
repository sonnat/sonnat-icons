/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import HeartOPaths from "./paths/HeartO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const HeartO = createSvgIcon(HeartOPaths, "HeartO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default HeartO;
