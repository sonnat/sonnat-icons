/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import GitlabPaths from "./paths/Gitlab";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Gitlab = createSvgIcon(GitlabPaths, "Gitlab") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Gitlab;
