<!--
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-28 21:04:43
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-29 14:25:05
-->
<template>
  正在努力开发中...
  <van-button type="primary" block @click="onLogout">退出登录</van-button>
</template>

<script lang="ts" setup>
  import { RouterEnum } from "@/enums/routerEnum";
  import { useUserStore } from "@/stores/modules/user";
  import { useRouter } from "vue-router";

  const { signOut } = useUserStore();
  const router = useRouter();
  const onLogout = () => {
    signOut();
    router.push(RouterEnum.Login);
  };
</script>
