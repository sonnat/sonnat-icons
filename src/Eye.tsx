/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import EyePaths from "./paths/Eye";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Eye = createSvgIcon(EyePaths, "Eye") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Eye;
