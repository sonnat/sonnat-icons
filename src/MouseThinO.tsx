/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MouseThinOPaths from "./paths/MouseThinO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const MouseThinO = createSvgIcon(MouseThinOPaths, "MouseThinO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default MouseThinO;
