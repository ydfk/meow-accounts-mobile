<!--
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-28 21:04:43
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-28 21:16:11
-->
<template>
  about
  <van-button type="primary" @click="onLogout">退出</van-button>
</template>

<script lang="ts" setup>
  import { RouterEnum } from "@/enums/routerEnum";
  import { useRouter } from "vue-router";

  const router = useRouter();
  const onLogout = () => {
    router.push(RouterEnum.Login);
  };
</script>
