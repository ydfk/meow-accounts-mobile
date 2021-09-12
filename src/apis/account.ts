/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-29 18:06:17
 * @LastEditors: ydfk
 * @LastEditTime: 2021-09-12 21:37:36
 */

import { AccountModel } from "@/models/account";
import { doHttp } from "@/utils/http/axios";

export const apiGetAccountByMonth = (year: number, month: number) =>
  doHttp.get<AccountModel[]>({ url: "account/month", params: { year: year, month: month } });

export const apiGetAccountById = (id: string) => doHttp.get<AccountModel>({ url: `account/${id}` });

export const apiDeleteAccountById = (id: string) => doHttp.delete<boolean>({ url: `account/${id}` });

export const apiSaveAccount = (account: AccountModel) => doHttp.put<AccountModel>({ url: "account", data: account });

export const apiUpdateAccount = (account: AccountModel) => doHttp.post<AccountModel>({ url: `account/${account.id}`, data: account });
