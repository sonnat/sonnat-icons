/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BookOpenTextPaths from "./paths/BookOpenText";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const BookOpenText = createSvgIcon(BookOpenTextPaths, "BookOpenText") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default BookOpenText;
