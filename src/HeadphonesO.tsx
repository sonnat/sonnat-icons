/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import HeadphonesOPaths from "./paths/HeadphonesO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const HeadphonesO = createSvgIcon(HeadphonesOPaths, "HeadphonesO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default HeadphonesO;
