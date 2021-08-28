/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-28 17:27:23
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-28 19:56:56
 */
import { TokenModel } from "@/models/user";
import day from "dayjs";
import { defineStore } from "pinia";
import { store } from "@/stores";

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
  getters: {
    getToken(): string {
      if (this.token) {
        const expireTime = day(this.tokenExpiration).toDate();
        const curTime = day().toDate();

        if (curTime > expireTime) {
          console.log("token已经过期");
          return "";
        } else {
          return this.token;
        }
      } else {
        return "";
      }
    },
  },
  actions: {
    setToken(tokenModel: TokenModel): void {
      this.token = tokenModel.token;
      this.tokenExpiration = tokenModel.tokenExpiration;
    },
  },
});

export const useUserStoreWithOut = () => useUserStore(store);
