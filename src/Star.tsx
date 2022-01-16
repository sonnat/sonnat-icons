/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import StarPaths from "./paths/Star";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Star = createSvgIcon(StarPaths, "Star") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Star;
