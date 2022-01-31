/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LabelLeftOPaths from "./paths/LabelLeftO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const LabelLeftO = createSvgIcon(LabelLeftOPaths, "LabelLeftO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default LabelLeftO;
