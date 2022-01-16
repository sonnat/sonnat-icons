/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import UmbrellaOPaths from "./paths/UmbrellaO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const UmbrellaO = createSvgIcon(UmbrellaOPaths, "UmbrellaO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default UmbrellaO;
