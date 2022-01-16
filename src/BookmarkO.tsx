/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BookmarkOPaths from "./paths/BookmarkO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const BookmarkO = createSvgIcon(BookmarkOPaths, "BookmarkO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default BookmarkO;
