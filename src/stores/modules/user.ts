/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-28 17:27:23
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-29 15:37:49
 */
import { TokenModel } from "@/models/user";
import day from "dayjs";
import { defineStore } from "pinia";
import { store } from "@/stores";
import { setSession, getSession, removeSession } from "@/utils/cache/persistent";
import { CacheEnum } from "@/enums/cacheEnum";

interface UserState {
  token: TokenModel;
}

export const useUserStore = defineStore({
  id: "user",
  state: (): UserState => ({
    token: { token: "", tokenExpiration: "" },
  }),
  getters: {
    getToken(): string {
      const token = getSession<TokenModel>(CacheEnum.Token) || this.token;

      if (token && token.token) {
        const expireTime = day(token.tokenExpiration).toDate();
        const curTime = day().toDate();

        if (curTime > expireTime) {
          console.error("token已经过期");
          removeSession(CacheEnum.Token);
          return "";
        } else {
          return token.token;
        }
      } else {
        removeSession(CacheEnum.Token);
        return "";
      }
    },
  },
  actions: {
    setToken(tokenModel: TokenModel): Promise<void> {
      return new Promise((resolve) => {
        this.token = tokenModel;
        setSession(CacheEnum.Token, this.token);
        resolve();
      });
    },
    signOut(): void {
      this.token = { token: "", tokenExpiration: "" };
      removeSession(CacheEnum.Token);
    },
  },
});

export const useUserStoreWithOut = () => useUserStore(store);
