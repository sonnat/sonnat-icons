/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import DropOPaths from "./paths/DropO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const DropO = createSvgIcon(DropOPaths, "DropO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default DropO;
