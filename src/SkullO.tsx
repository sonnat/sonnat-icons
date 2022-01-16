/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import SkullOPaths from "./paths/SkullO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const SkullO = createSvgIcon(SkullOPaths, "SkullO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default SkullO;
