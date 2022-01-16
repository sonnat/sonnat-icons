/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LoginPaths from "./paths/Login";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Login = createSvgIcon(LoginPaths, "Login") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Login;
