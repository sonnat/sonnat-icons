/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BriefcaseOPaths from "./paths/BriefcaseO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const BriefcaseO = createSvgIcon(BriefcaseOPaths, "BriefcaseO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default BriefcaseO;
