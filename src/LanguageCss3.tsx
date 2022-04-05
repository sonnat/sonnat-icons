/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LanguageCss3Paths from "./paths/LanguageCss3";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const LanguageCss3 = createSvgIcon(LanguageCss3Paths, "LanguageCss3") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default LanguageCss3;
