/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CallMadePaths from "./paths/CallMade";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CallMade = createSvgIcon(CallMadePaths, "CallMade") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CallMade;
