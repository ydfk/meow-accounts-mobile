/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-26 12:41:57
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-28 21:06:12
 */

import { RouterEnum } from "@/enums/routerEnum";
import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Root",
    redirect: RouterEnum.Login,
  },
  {
    path: `/${RouterEnum.Login}`,
    name: RouterEnum.Login,
    component: () => import("@/views/login/Login.vue"),
  },
  {
    path: `/${RouterEnum.Home}`,
    name: RouterEnum.Home,
    component: () => import("@/views/home/Home.vue"),
    children: [
      {
        path: `/${RouterEnum.Account}`,
        name: RouterEnum.Account,
        component: () => import("@/views/account/Account.vue"),
      },
      {
        path: `/${RouterEnum.Statistic}`,
        name: RouterEnum.Statistic,
        component: () => import("@/views/statistic/Statistic.vue"),
      },
      {
        path: `/${RouterEnum.About}`,
        name: RouterEnum.About,
        component: () => import("@/views/about/About.vue"),
      },
    ],
  },
];
