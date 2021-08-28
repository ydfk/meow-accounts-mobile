/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-28 13:24:38
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-28 17:39:26
 */
import { loginApi } from "@/apis/login";
import { RouterEnum } from "@/enums/routerEnum";
import { useUserStore } from "@/stores/modules/user";
import { Toast } from "vant";
import { toRefs } from "vue";
import { defineComponent, reactive } from "vue-demi";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const state = reactive({
      userName: "",
      password: "",
    });

    const onLogin = async () => {
      Toast.clear();
      if (state.userName && state.password) {
        Toast.loading({
          duration: 0,
          forbidClick: true,
          message: "登陆中。。。",
        });

        const token = await loginApi(state.userName, state.password);
        if (token && token.token) {
          const userStore = useUserStore();
          userStore.setToken(token);
          router.push(RouterEnum.Dashboard);
          Toast.success("登录成功");
        } else {
          Toast.fail("用户名或者密码不正确");
        }
      } else {
        Toast.fail("用户名或者密码不正确");
      }
    };

    return {
      ...toRefs(state),
      onLogin,
    };
  },
});
