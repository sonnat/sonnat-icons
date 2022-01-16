/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import RefreshPaths from "./paths/Refresh";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Refresh = createSvgIcon(RefreshPaths, "Refresh") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Refresh;
