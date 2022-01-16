/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import WavesOPaths from "./paths/WavesO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const WavesO = createSvgIcon(WavesOPaths, "WavesO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default WavesO;
