/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BackpackOPaths from "./paths/BackpackO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const BackpackO = createSvgIcon(BackpackOPaths, "BackpackO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default BackpackO;
