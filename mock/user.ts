/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-27 12:01:39
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-28 17:26:24
 */
import { MockMethod } from "vite-plugin-mock";
import { requestParams, resultSuccess } from "./_util";

export default [
  {
    url: "/api/login",
    timeout: 1000,
    method: "get",
    response: (request: requestParams) => {
      console.log(request);
      if (request.query && request.query.userName && request.query.userName == "dlm") {
        return resultSuccess({
          token: "@guid",
          tokenExpiration: 1800,
        });
      } else {
        return resultSuccess({
          token: "",
        });
      }
    },
  },
] as MockMethod[];
