/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ContentCopyOPaths from "./paths/ContentCopyO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ContentCopyO = createSvgIcon(ContentCopyOPaths, "ContentCopyO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ContentCopyO;
