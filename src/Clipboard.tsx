/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ClipboardPaths from "./paths/Clipboard";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Clipboard = createSvgIcon(ClipboardPaths, "Clipboard") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Clipboard;
