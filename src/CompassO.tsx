/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CompassOPaths from "./paths/CompassO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CompassO = createSvgIcon(CompassOPaths, "CompassO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CompassO;
