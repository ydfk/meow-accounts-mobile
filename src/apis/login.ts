/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-26 23:04:48
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-28 17:22:30
 */

import { TokenModel } from "@/models/user";
import { doHttp } from "@/utils/http/axios";

export const loginApi = (userName: string, password: string) =>
  doHttp.get<TokenModel>({ url: "login", params: { userName: userName, password: password } });
