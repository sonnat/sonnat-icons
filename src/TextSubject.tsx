/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TextSubjectPaths from "./paths/TextSubject";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const TextSubject = createSvgIcon(TextSubjectPaths, "TextSubject") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default TextSubject;
