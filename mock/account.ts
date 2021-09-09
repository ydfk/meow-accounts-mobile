/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-29 17:27:16
 * @LastEditors: ydfk
 * @LastEditTime: 2021-09-09 21:56:42
 */

import { MockMethod } from "vite-plugin-mock";
import { requestParams, resultSuccess } from "./_util";
import dayjs from "dayjs";
import { random } from "lodash-es";

const getAccount = (date: Date) => {
  return {
    id: "@guid",
    date: date,
    amount: "@float(1, 50000, 0, 2)",
    category: "@cword(2, 5)",
    remark: "@cword(0, 100)",
    "type|1": ["0", "1"],
  };
};

export default [
  {
    url: "/api/account",
    timeout: 1000,
    method: "get",
    response: (request: requestParams) => {
      const getAccounts = [];
      if (request.query && request.query.beginDate && request.query.endDate) {
        const beginDate = dayjs(request.query.beginDate);
        const endDate = dayjs(request.query.endDate);

        const days = endDate.diff(beginDate, "d");

        for (let i = days; i > 0; i--) {
          const date = beginDate.day(i);
          const count = random(0, 5);

          if (count > 0) {
            for (let index = 1; index <= count; index++) {
              getAccounts.push(getAccount(date.toDate()));
            }
          }
        }
      }
      return resultSuccess(getAccounts);
    },
  },
] as MockMethod[];
