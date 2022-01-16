/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TaxiOPaths from "./paths/TaxiO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const TaxiO = createSvgIcon(TaxiOPaths, "TaxiO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default TaxiO;
