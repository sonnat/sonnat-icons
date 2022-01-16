/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import SilverwareForkSpoonOPaths from "./paths/SilverwareForkSpoonO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const SilverwareForkSpoonO = createSvgIcon(SilverwareForkSpoonOPaths, "SilverwareForkSpoonO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default SilverwareForkSpoonO;
