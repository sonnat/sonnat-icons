/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import HeadphonesPaths from "./paths/Headphones";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Headphones = createSvgIcon(HeadphonesPaths, "Headphones") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Headphones;
