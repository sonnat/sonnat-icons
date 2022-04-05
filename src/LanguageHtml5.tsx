/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LanguageHtml5Paths from "./paths/LanguageHtml5";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const LanguageHtml5 = createSvgIcon(LanguageHtml5Paths, "LanguageHtml5") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default LanguageHtml5;
