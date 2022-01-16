/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import HeartPaths from "./paths/Heart";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Heart = createSvgIcon(HeartPaths, "Heart") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Heart;
