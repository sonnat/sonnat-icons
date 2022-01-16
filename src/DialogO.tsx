/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import DialogOPaths from "./paths/DialogO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const DialogO = createSvgIcon(DialogOPaths, "DialogO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default DialogO;
