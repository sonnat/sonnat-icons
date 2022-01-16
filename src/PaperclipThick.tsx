/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PaperclipThickPaths from "./paths/PaperclipThick";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PaperclipThick = createSvgIcon(PaperclipThickPaths, "PaperclipThick") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PaperclipThick;
