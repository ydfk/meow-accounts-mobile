/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-26 17:19:50
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-26 17:25:26
 */
import { createPinia } from "pinia";
import { App } from "vue";
const store = createPinia();

export const setupStore = (app: App<Element>) => {
  app.use(store);
};

export { store };
