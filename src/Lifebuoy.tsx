/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LifebuoyPaths from "./paths/Lifebuoy";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Lifebuoy = createSvgIcon(LifebuoyPaths, "Lifebuoy") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Lifebuoy;
