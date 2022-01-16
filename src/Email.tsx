/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import EmailPaths from "./paths/Email";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Email = createSvgIcon(EmailPaths, "Email") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Email;
