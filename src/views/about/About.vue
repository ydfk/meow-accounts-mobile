<!--
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-28 21:04:43
 * @LastEditors: ydfk
 * @LastEditTime: 2021-09-13 17:19:16
-->
<template>
  <div class="p-5 space-y-5">
    <div>前端版本：{{ version }}</div>
    <div>编译时间：{{ lastBuildTime }}</div>
    <van-button type="primary" block @click="onLogout">退出登录</van-button>
  </div>
</template>

<script lang="ts" setup>
  import { RouterEnum } from "@/enums/routerEnum";
  import { useUserStore } from "@/stores/modules/user";
  import { useRouter } from "vue-router";

  //@ts-ignore
  const { pkg, lastBuildTime } = __APP_INFO__;
  const { version } = pkg;

  const { signOut } = useUserStore();
  const router = useRouter();
  const onLogout = () => {
    signOut();
    router.push(RouterEnum.Login);
  };
</script>
