/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MicrophoneOffPaths from "./paths/MicrophoneOff";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const MicrophoneOff = createSvgIcon(MicrophoneOffPaths, "MicrophoneOff") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default MicrophoneOff;
