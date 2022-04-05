/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LinkOffPaths from "./paths/LinkOff";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const LinkOff = createSvgIcon(LinkOffPaths, "LinkOff") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default LinkOff;
