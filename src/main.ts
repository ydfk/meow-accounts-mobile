/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-24 17:24:45
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-28 20:47:18
 */
import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "./routers";
import { setupStore } from "@/stores/index";
import { Form, Field, CellGroup, Button, Icon, ConfigProvider, Dialog, Tabbar, TabbarItem } from "vant";
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
  app.use(Dialog);
  app.use(Tabbar);
  app.use(TabbarItem);

  setupRouter(app);
  setupStore(app);
  app.mount("#app");
};

bootstrap();
