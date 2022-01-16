/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import InstagramOPaths from "./paths/InstagramO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const InstagramO = createSvgIcon(InstagramOPaths, "InstagramO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default InstagramO;
