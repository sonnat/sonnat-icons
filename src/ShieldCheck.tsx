/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ShieldCheckPaths from "./paths/ShieldCheck";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ShieldCheck = createSvgIcon(ShieldCheckPaths, "ShieldCheck") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ShieldCheck;
