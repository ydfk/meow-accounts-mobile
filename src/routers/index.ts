/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-26 12:30:11
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-26 16:43:32
 */

import { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./route";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from) => {
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});

export const setupRouter = (app: App<Element>) => {
  app.use(router);
};
