/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PageFirstPaths from "./paths/PageFirst";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PageFirst = createSvgIcon(PageFirstPaths, "PageFirst") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PageFirst;
