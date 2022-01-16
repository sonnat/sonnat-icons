/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MicrophoneOffOPaths from "./paths/MicrophoneOffO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const MicrophoneOffO = createSvgIcon(MicrophoneOffOPaths, "MicrophoneOffO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default MicrophoneOffO;
