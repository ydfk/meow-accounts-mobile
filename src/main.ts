/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-24 17:24:45
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-26 17:26:37
 */
import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "./routers";
import { setupStore } from "@/stores/index";

const bootstrap = () => {
  const app = createApp(App);
  setupRouter(app);
  setupStore(app);
  app.mount("#app");
};

bootstrap();
