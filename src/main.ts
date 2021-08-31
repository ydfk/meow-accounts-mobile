/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-24 17:24:45
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-31 23:38:22
 */
import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "./routers";
import { setupStore } from "@/stores/index";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import {
  Col,
  Row,
  Form,
  Field,
  Cell,
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
  SwipeCell,
  NumberKeyboard,
} from "vant";

import "virtual:windi.css";
import "virtual:windi-devtools";

dayjs.locale("zh-cn");

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
  app.use(SwipeCell);
  app.use(Cell);
  app.use(NumberKeyboard);

  setupRouter(app);
  setupStore(app);
  app.mount("#app");
};

bootstrap();
