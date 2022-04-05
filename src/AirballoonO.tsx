/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import AirballoonOPaths from "./paths/AirballoonO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const AirballoonO = createSvgIcon(AirballoonOPaths, "AirballoonO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default AirballoonO;
