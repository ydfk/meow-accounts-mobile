/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-26 23:04:48
 * @LastEditors: ydfk
 * @LastEditTime: 2021-09-12 21:54:58
 */

import { TokenModel } from "@/models/user";
import { doHttp } from "@/utils/http/axios";

export const apiGetToken = (userName: string, password: string) =>
  doHttp.get<TokenModel>({ url: "token", params: { userName: userName, password: password } }, { requestOptions: { withToken: false } });

export const apiRefreshToken = () => doHttp.get<TokenModel>({ url: "token/refresh" });
