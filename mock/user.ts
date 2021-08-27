/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-27 12:01:39
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-27 12:26:11
 */
import { MockMethod } from "vite-plugin-mock";
import { resultSuccess } from "./_util";

export default [
  {
    url: "/api/login",
    timeout: 1000,
    method: "get",
    response: () => {
      return resultSuccess({
        id: "@guid",
        account: "@cfirst",
        email: "@email",
        nickname: "@cname()",
        role: "@first",
        createTime: "@datetime",
        remark: "@cword(10,20)",
      });
    },
  },
] as MockMethod[];
