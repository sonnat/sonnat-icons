/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TagOPaths from "./paths/TagO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const TagO = createSvgIcon(TagOPaths, "TagO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default TagO;
