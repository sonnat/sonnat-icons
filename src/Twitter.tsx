/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TwitterPaths from "./paths/Twitter";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Twitter = createSvgIcon(TwitterPaths, "Twitter") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Twitter;
