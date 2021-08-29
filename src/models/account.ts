import { AccountTypeEnum } from "@/enums/accountEnum";
import { BaseModel } from ".";

/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-29 17:17:25
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-30 00:30:13
 */
export interface AccountModel extends BaseModel {
  date: Date;
  amount: number;
  category: string;
  remark: string;
  type: AccountTypeEnum;
}

export interface AccountGroupDayModel {
  dateOfDay: string;
  accounts: AccountModel[];
}