/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PhoneInTalkOPaths from "./paths/PhoneInTalkO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PhoneInTalkO = createSvgIcon(PhoneInTalkOPaths, "PhoneInTalkO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PhoneInTalkO;
