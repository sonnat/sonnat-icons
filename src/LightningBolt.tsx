/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LightningBoltPaths from "./paths/LightningBolt";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const LightningBolt = createSvgIcon(LightningBoltPaths, "LightningBolt") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default LightningBolt;
