/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-29 15:12:36
 * @LastEditors: ydfk
 * @LastEditTime: 2021-09-10 23:12:27
 */

import { CacheEnum } from "@/enums/cacheEnum";
import { TokenModel } from "@/models/user";
import { createStorage } from "./storageCache";

const ss = createStorage({
  prefixKey: "MEOW_",
  storage: sessionStorage,
});

const ls = createStorage({
  prefixKey: "MEOW_",
  storage: localStorage,
});

interface BasicStore {
  [CacheEnum.Token]: TokenModel | null | undefined;
}

export const getSession = <T>(key: CacheEnum) => ss.get(key) as T;
export const setSession = (key: CacheEnum, val: BasicStore[CacheEnum]): void => {
  ss.set(key, val);
};
export const removeSession = (key: CacheEnum) => ss.remove(key);
export const clearSession = () => ss.clear();

export const getLocal = <T>(key: CacheEnum) => ls.get(key) as T;
export const setLocal = (key: CacheEnum, val: BasicStore[CacheEnum]): void => {
  ls.set(key, val);
};
export const removeLocal = (key: CacheEnum) => ls.remove(key);
export const clearSLocal = () => ls.clear();
