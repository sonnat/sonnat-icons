/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CallReceivedPaths from "./paths/CallReceived";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CallReceived = createSvgIcon(CallReceivedPaths, "CallReceived") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CallReceived;
