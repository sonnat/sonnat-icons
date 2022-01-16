/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import VirusPaths from "./paths/Virus";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Virus = createSvgIcon(VirusPaths, "Virus") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Virus;
