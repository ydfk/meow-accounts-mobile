/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-28 17:27:23
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-28 17:32:28
 */
import { TokenModel } from "@/models/user";
import { defineStore } from "pinia";

interface UserState {
  token: string;
  tokenExpiration: number;
}
export const useUserStore = defineStore({
  id: "user",
  state: (): UserState => ({
    token: "",
    tokenExpiration: 0,
  }),
  getters: {},
  actions: {
    setToken(tokenModel: TokenModel): void {
      this.token = tokenModel.token;
      this.tokenExpiration = tokenModel.tokenExpiration;
    },
  },
});
