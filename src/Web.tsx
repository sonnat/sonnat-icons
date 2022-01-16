/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import WebPaths from "./paths/Web";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Web = createSvgIcon(WebPaths, "Web") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Web;
