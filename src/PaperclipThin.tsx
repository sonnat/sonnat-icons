/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PaperclipThinPaths from "./paths/PaperclipThin";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PaperclipThin = createSvgIcon(PaperclipThinPaths, "PaperclipThin") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PaperclipThin;
