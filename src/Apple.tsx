/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ApplePaths from "./paths/Apple";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Apple = createSvgIcon(ApplePaths, "Apple") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Apple;
