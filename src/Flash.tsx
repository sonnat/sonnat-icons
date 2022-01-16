/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FlashPaths from "./paths/Flash";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Flash = createSvgIcon(FlashPaths, "Flash") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Flash;
