/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-28 17:27:23
 * @LastEditors: ydfk
 * @LastEditTime: 2021-09-12 21:55:49
 */
import { TokenModel } from "@/models/user";
import day from "dayjs";
import { defineStore } from "pinia";
import { store } from "@/stores";
import { setLocal, getLocal, removeLocal } from "@/utils/cache/persistent";
import { CacheEnum } from "@/enums/cacheEnum";

interface UserState {
  token: TokenModel;
}

export const useUserStore = defineStore({
  id: "user",
  state: (): UserState => ({
    token: { token: "", expiration: new Date() },
  }),
  getters: {
    getToken(): string {
      const token = getLocal<TokenModel>(CacheEnum.Token) || this.token;

      if (token && token.token) {
        const expireTime = token.expiration;
        const curTime = day().toDate();
        // todo: 滑动刷新
        if (curTime > expireTime) {
          console.error("token已经过期");
          removeLocal(CacheEnum.Token);
          return "";
        } else {
          return token.token;
        }
      } else {
        removeLocal(CacheEnum.Token);
        return "";
      }
    },
  },
  actions: {
    setToken(tokenModel: TokenModel): Promise<void> {
      return new Promise((resolve) => {
        this.token = tokenModel;
        setLocal(CacheEnum.Token, this.token);
        resolve();
      });
    },
    signOut(): void {
      this.token = { token: "", expiration: new Date() };
      removeLocal(CacheEnum.Token);
    },
  },
});

export const useUserStoreWithOut = () => useUserStore(store);
