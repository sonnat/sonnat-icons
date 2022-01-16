/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import SonnatPaths from "./paths/Sonnat";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Sonnat = createSvgIcon(SonnatPaths, "Sonnat") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Sonnat;
