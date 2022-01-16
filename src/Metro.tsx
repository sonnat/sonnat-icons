/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MetroPaths from "./paths/Metro";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Metro = createSvgIcon(MetroPaths, "Metro") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Metro;
