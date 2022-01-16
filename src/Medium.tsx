/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MediumPaths from "./paths/Medium";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Medium = createSvgIcon(MediumPaths, "Medium") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Medium;
