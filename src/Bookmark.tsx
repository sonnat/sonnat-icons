/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BookmarkPaths from "./paths/Bookmark";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Bookmark = createSvgIcon(BookmarkPaths, "Bookmark") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Bookmark;
