/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MixerSettingsPaths from "./paths/MixerSettings";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const MixerSettings = createSvgIcon(MixerSettingsPaths, "MixerSettings") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default MixerSettings;
