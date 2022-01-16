/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PhoneHangupPaths from "./paths/PhoneHangup";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PhoneHangup = createSvgIcon(PhoneHangupPaths, "PhoneHangup") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PhoneHangup;
