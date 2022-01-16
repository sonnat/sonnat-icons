/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import Progress75PersentPaths from "./paths/Progress75Persent";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Progress75Persent = createSvgIcon(Progress75PersentPaths, "Progress75Persent") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Progress75Persent;
