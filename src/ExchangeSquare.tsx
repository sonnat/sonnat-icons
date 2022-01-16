/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ExchangeSquarePaths from "./paths/ExchangeSquare";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ExchangeSquare = createSvgIcon(ExchangeSquarePaths, "ExchangeSquare") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ExchangeSquare;
