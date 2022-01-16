/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TagRemovePaths from "./paths/TagRemove";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const TagRemove = createSvgIcon(TagRemovePaths, "TagRemove") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default TagRemove;
