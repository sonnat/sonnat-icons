/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MicrophoneOPaths from "./paths/MicrophoneO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const MicrophoneO = createSvgIcon(MicrophoneOPaths, "MicrophoneO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default MicrophoneO;
