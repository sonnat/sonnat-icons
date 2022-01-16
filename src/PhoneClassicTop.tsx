/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PhoneClassicTopPaths from "./paths/PhoneClassicTop";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PhoneClassicTop = createSvgIcon(PhoneClassicTopPaths, "PhoneClassicTop") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PhoneClassicTop;
