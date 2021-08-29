/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-29 18:06:17
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-29 18:07:25
 */

import { AccountModel } from "@/models/account";
import { doHttp } from "@/utils/http/axios";

export const accountApi = (beginDate: Date, endDate: Date) =>
  doHttp.get<AccountModel[]>({ url: "account", params: { beginDate: beginDate, endDate: endDate } });
