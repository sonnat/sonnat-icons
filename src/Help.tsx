/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import HelpPaths from "./paths/Help";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Help = createSvgIcon(HelpPaths, "Help") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Help;
