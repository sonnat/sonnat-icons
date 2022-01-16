/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PhoneHangupOPaths from "./paths/PhoneHangupO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PhoneHangupO = createSvgIcon(PhoneHangupOPaths, "PhoneHangupO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PhoneHangupO;
