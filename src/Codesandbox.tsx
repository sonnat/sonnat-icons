/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CodesandboxPaths from "./paths/Codesandbox";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Codesandbox = createSvgIcon(CodesandboxPaths, "Codesandbox") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Codesandbox;
