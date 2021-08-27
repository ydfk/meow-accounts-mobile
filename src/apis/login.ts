/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-26 23:04:48
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-26 23:06:58
 */

import { doHttp } from "@/utils/http/axios";

export const loginApi = (userName: string, password: string) => doHttp.get<any>({ url: "login", data: { userName: userName, password: password } });
