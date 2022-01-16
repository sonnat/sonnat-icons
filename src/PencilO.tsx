/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PencilOPaths from "./paths/PencilO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PencilO = createSvgIcon(PencilOPaths, "PencilO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PencilO;
