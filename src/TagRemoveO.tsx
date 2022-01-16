/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TagRemoveOPaths from "./paths/TagRemoveO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const TagRemoveO = createSvgIcon(TagRemoveOPaths, "TagRemoveO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default TagRemoveO;
