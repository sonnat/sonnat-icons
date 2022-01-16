/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PencilPaths from "./paths/Pencil";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Pencil = createSvgIcon(PencilPaths, "Pencil") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Pencil;
