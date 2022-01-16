/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PhoneClassicTopOPaths from "./paths/PhoneClassicTopO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PhoneClassicTopO = createSvgIcon(PhoneClassicTopOPaths, "PhoneClassicTopO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PhoneClassicTopO;
