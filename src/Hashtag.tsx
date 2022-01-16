/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import HashtagPaths from "./paths/Hashtag";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Hashtag = createSvgIcon(HashtagPaths, "Hashtag") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Hashtag;
