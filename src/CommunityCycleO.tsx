/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CommunityCycleOPaths from "./paths/CommunityCycleO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CommunityCycleO = createSvgIcon(CommunityCycleOPaths, "CommunityCycleO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CommunityCycleO;
