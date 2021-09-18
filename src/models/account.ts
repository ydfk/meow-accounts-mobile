/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-29 17:17:25
 * @LastEditors: ydfk
 * @LastEditTime: 2021-09-18 14:21:30
 */
import { AccountTypeEnum } from "@/enums/accountEnum";
import { BaseModel } from ".";

export interface AccountModel extends BaseModel {
  date: Date;
  amount: number;
  name: string;
  quantity: string;
  category: string;
  remark: string;
  type: AccountTypeEnum;
  receipt: boolean;
}

export interface AccountGroupDayModel {
  dateOfDay: string;
  accounts: AccountModel[];
}
