/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import NearMePaths from "./paths/NearMe";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const NearMe = createSvgIcon(NearMePaths, "NearMe") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default NearMe;
