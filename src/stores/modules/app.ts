/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-26 17:27:13
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-26 17:45:07
 */
import { defineStore } from "pinia";

interface AppState {
  loading: boolean;
}

export const useAppStore = defineStore({
  id: "app",
  state: (): AppState => ({
    loading: false,
  }),
  getters: {
    getLoading(): boolean {
      return this.loading;
    },
  },
  actions: {
    setLoading(loading: boolean): void {
      this.loading = loading;
    },
  },
});
