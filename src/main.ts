/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-24 17:24:45
 * @LastEditors: ydfk
 * @LastEditTime: 2021-09-13 21:41:51
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
  Radio,
  RadioGroup,
  Switch,
  Calendar,
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
  app.use(Radio);
  app.use(RadioGroup);
  app.use(Switch);
  app.use(Calendar);

  setupRouter(app);
  setupStore(app);
  app.mount("#app");
};

bootstrap();
