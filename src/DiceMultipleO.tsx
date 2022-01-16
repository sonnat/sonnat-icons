/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import DiceMultipleOPaths from "./paths/DiceMultipleO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const DiceMultipleO = createSvgIcon(DiceMultipleOPaths, "DiceMultipleO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default DiceMultipleO;
