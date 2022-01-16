/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LabelOPaths from "./paths/LabelO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const LabelO = createSvgIcon(LabelOPaths, "LabelO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default LabelO;
