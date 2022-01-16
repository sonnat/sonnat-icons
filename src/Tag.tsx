/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TagPaths from "./paths/Tag";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Tag = createSvgIcon(TagPaths, "Tag") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Tag;
