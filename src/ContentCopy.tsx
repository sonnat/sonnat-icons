/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ContentCopyPaths from "./paths/ContentCopy";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ContentCopy = createSvgIcon(ContentCopyPaths, "ContentCopy") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ContentCopy;
