/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import IceCreamOPaths from "./paths/IceCreamO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const IceCreamO = createSvgIcon(IceCreamOPaths, "IceCreamO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default IceCreamO;
