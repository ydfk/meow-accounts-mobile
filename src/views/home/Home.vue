<!--
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-26 16:44:06
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-28 21:12:49
-->
<template>
  <router-view />
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item name="account" icon="balance-o">记账</van-tabbar-item>
    <van-tabbar-item name="statistic" icon="bar-chart-o">统计</van-tabbar-item>
    <van-tabbar-item name="about" icon="manager-o">关于</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts" setup>
  import { RouterEnum } from "@/enums/routerEnum";
  import { ref, onMounted } from "vue";
  import { useRouter } from "vue-router";

  const router = useRouter();
  const active = ref(RouterEnum.Account);

  const onChange = (index) => {
    console.log("🚀 ~ file: Home.vue ~ line 22 ~ onChange ~ index", index);
    router.push(index);
  };

  onMounted(() => {
    router.push(active.value);
  });
</script>
