/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import NodejsPaths from "./paths/Nodejs";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Nodejs = createSvgIcon(NodejsPaths, "Nodejs") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Nodejs;
