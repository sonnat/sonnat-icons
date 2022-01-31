/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LightningBoltOPaths from "./paths/LightningBoltO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const LightningBoltO = createSvgIcon(LightningBoltOPaths, "LightningBoltO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default LightningBoltO;
