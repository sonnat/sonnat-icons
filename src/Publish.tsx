/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PublishPaths from "./paths/Publish";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Publish = createSvgIcon(PublishPaths, "Publish") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Publish;
