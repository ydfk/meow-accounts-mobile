<!--
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-26 09:16:24
 * @LastEditors: ydfk
 * @LastEditTime: 2021-09-13 22:36:53
-->
<template>
  <div class="h-full p-5 flex flex-col justify-center">
    <div class="h-[70%]">
      <div class="h-2/6 flex justify-center items-center">
        <span class="text-4xl font-medium">喵喵账</span>
      </div>
      <van-form class="h-4/6">
        <van-cell-group inset>
          <van-field left-icon="user-o" v-model="userName" name="用户名" placeholder="用户名" />
          <van-field left-icon="bookmark-o" v-model="password" type="password" name="密码" placeholder="密码" />
        </van-cell-group>

        <van-button class="mt-10" round block type="primary" native-type="submit" @click="onLogin"> 登录 </van-button>
      </van-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { apiGetToken } from "@/apis/token";
  import { RouterEnum } from "@/enums/routerEnum";
  import { useUserStore } from "@/stores/modules/user";
  import { Toast } from "vant";
  import { useRouter } from "vue-router";

  const router = useRouter();
  const { setToken, signOut } = useUserStore();
  let userName = $ref("");
  let password = $ref("");

  signOut();

  const onLogin = async () => {
    Toast.clear();
    if (userName && password) {
      Toast.loading({
        duration: 0,
        forbidClick: true,
        message: "登陆中。。。",
      });

      const token = await apiGetToken(userName, password);
      if (token && token.token) {
        Toast.success("登录成功");
        await setToken(token);
        router.push(RouterEnum.Home);
      } else {
        Toast.fail("用户名或者密码不正确");
      }
    } else {
      Toast.fail("用户名或者密码不能为空");
    }
  };
</script>
