/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BarbecueOPaths from "./paths/BarbecueO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const BarbecueO = createSvgIcon(BarbecueOPaths, "BarbecueO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default BarbecueO;
