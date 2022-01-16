/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MicrophonePaths from "./paths/Microphone";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Microphone = createSvgIcon(MicrophonePaths, "Microphone") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Microphone;
