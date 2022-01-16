/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import SupportAgentPaths from "./paths/SupportAgent";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const SupportAgent = createSvgIcon(SupportAgentPaths, "SupportAgent") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default SupportAgent;
