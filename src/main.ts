/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-24 17:24:45
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-28 16:56:50
 */
import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "./routers";
import { setupStore } from "@/stores/index";
import { Form, Field, CellGroup, Button, Icon, ConfigProvider } from "vant";
import "virtual:windi.css";
import "virtual:windi-devtools";

const bootstrap = () => {
  const app = createApp(App);

  app.use(Form);
  app.use(Field);
  app.use(CellGroup);
  app.use(Button);
  app.use(Icon);
  app.use(ConfigProvider);

  setupRouter(app);
  setupStore(app);
  app.mount("#app");
};

bootstrap();
