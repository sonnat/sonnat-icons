/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import WavesPaths from "./paths/Waves";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Waves = createSvgIcon(WavesPaths, "Waves") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Waves;
