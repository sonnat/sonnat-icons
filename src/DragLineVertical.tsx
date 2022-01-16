/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import DragLineVerticalPaths from "./paths/DragLineVertical";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const DragLineVertical = createSvgIcon(DragLineVerticalPaths, "DragLineVertical") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default DragLineVertical;
