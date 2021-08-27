/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-26 12:41:57
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-27 21:31:45
 */

import { RouterEnum } from "@/enums/routerEnum";
import { RouteRecordRaw } from "vue-router";

export const menusRoutes: RouteRecordRaw[] = [
  {
    path: `/${RouterEnum.Dashboard}`,
    name: RouterEnum.Dashboard,
    component: () => import("@/views/mobile/dashboard/Dashboard.vue"),
  },
];

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Root",
    redirect: RouterEnum.Login,
  },
  {
    path: `/${RouterEnum.Login}`,
    name: RouterEnum.Login,
    component: () => import("@/views/mobile/login/Login.vue"),
  },
  {
    path: `/${RouterEnum.Home}`,
    name: RouterEnum.Home,
    component: () => import("@/views/mobile/home/Home.vue"),
    children: menusRoutes,
  },
];
