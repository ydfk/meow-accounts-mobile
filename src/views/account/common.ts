import { AccountTypeEnum } from "@/enums/accountEnum";
import { AccountModel } from "@/models/account";

/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-30 22:43:56
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-30 22:47:15
 */
export const reduceAccountAmount = (accounts: AccountModel[], accountType: AccountTypeEnum): number => {
  const amounts = accounts.filter((f) => f.type == accountType).map((m) => m.amount);
  if (amounts && amounts.length > 0) {
    return amounts.reduce((p, c) => p + c);
  }
  return 0;
};
