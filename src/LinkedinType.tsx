/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LinkedinTypePaths from "./paths/LinkedinType";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const LinkedinType = createSvgIcon(LinkedinTypePaths, "LinkedinType") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default LinkedinType;
