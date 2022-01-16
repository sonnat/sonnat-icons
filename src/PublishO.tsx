/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PublishOPaths from "./paths/PublishO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PublishO = createSvgIcon(PublishOPaths, "PublishO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PublishO;
