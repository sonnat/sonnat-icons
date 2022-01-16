/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TagCheckCirclePaths from "./paths/TagCheckCircle";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const TagCheckCircle = createSvgIcon(TagCheckCirclePaths, "TagCheckCircle") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default TagCheckCircle;
