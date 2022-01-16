/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BriefcasePaths from "./paths/Briefcase";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Briefcase = createSvgIcon(BriefcasePaths, "Briefcase") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Briefcase;
