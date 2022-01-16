/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BabyOPaths from "./paths/BabyO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const BabyO = createSvgIcon(BabyOPaths, "BabyO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default BabyO;
