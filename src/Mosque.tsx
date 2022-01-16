/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MosquePaths from "./paths/Mosque";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Mosque = createSvgIcon(MosquePaths, "Mosque") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Mosque;
