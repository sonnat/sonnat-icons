/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import DialogPaths from "./paths/Dialog";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Dialog = createSvgIcon(DialogPaths, "Dialog") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Dialog;
