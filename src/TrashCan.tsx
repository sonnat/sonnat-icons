/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TrashCanPaths from "./paths/TrashCan";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const TrashCan = createSvgIcon(TrashCanPaths, "TrashCan") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default TrashCan;
