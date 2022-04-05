/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import NextjsPaths from "./paths/Nextjs";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Nextjs = createSvgIcon(NextjsPaths, "Nextjs") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Nextjs;
