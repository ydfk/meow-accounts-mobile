/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-26 12:30:11
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-29 14:54:10
 */

import { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./route";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useUserStoreWithOut } from "@/stores/modules/user";
import { RouterEnum } from "@/enums/routerEnum";

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from) => {
  NProgress.start();
  const { getToken } = useUserStoreWithOut();
  if (to.meta && to.meta.title) {
    document.title = to.meta.title as string;
  }

  if (!to.meta || Object.keys(to.meta).length === 0 || (to.meta && to.meta.needAuth)) {
    if (!getToken) {
      router.push(RouterEnum.Login);
    }
  }

  return true;
});

router.afterEach(() => {
  NProgress.done();
});

export const setupRouter = (app: App<Element>) => {
  app.use(router);
};
