/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CalculatorOPaths from "./paths/CalculatorO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CalculatorO = createSvgIcon(CalculatorOPaths, "CalculatorO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CalculatorO;
