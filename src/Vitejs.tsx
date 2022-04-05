/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import VitejsPaths from "./paths/Vitejs";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Vitejs = createSvgIcon(VitejsPaths, "Vitejs") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Vitejs;
