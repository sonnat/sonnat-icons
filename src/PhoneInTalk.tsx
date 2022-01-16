/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PhoneInTalkPaths from "./paths/PhoneInTalk";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PhoneInTalk = createSvgIcon(PhoneInTalkPaths, "PhoneInTalk") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PhoneInTalk;
