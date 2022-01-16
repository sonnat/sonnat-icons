/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import NearMeOPaths from "./paths/NearMeO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const NearMeO = createSvgIcon(NearMeOPaths, "NearMeO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default NearMeO;
