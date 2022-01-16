/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LinkPaths from "./paths/Link";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Link = createSvgIcon(LinkPaths, "Link") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Link;
