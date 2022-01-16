/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MosqueOPaths from "./paths/MosqueO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const MosqueO = createSvgIcon(MosqueOPaths, "MosqueO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default MosqueO;
