/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-24 17:24:45
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-29 19:31:50
 */
import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "./routers";
import { setupStore } from "@/stores/index";
import {
  Col,
  Row,
  Form,
  Field,
  CellGroup,
  Button,
  Icon,
  ConfigProvider,
  Dialog,
  Tabbar,
  TabbarItem,
  DatetimePicker,
  PullRefresh,
  Empty,
  Sticky,
  Popup,
  Skeleton,
} from "vant";

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
  app.use(Col);
  app.use(Row);
  app.use(DatetimePicker);
  app.use(PullRefresh);
  app.use(Empty);
  app.use(Sticky);
  app.use(Popup);
  app.use(Skeleton);

  setupRouter(app);
  setupStore(app);
  app.mount("#app");
};

bootstrap();
