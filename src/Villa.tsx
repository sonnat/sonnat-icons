/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import VillaPaths from "./paths/Villa";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Villa = createSvgIcon(VillaPaths, "Villa") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Villa;
