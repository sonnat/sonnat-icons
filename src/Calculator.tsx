/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CalculatorPaths from "./paths/Calculator";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Calculator = createSvgIcon(CalculatorPaths, "Calculator") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Calculator;
