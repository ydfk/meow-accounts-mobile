<!--
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-24 17:24:45
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-28 16:33:11
-->
<template>
  <van-config-provider class="h-full" :theme-vars="themeVars">
    <RouterView />
  </van-config-provider>
</template>

<script lang="ts" setup>
  const themeVars = {
    cellGroupInsetPadding: 0,
  };
</script>

<style lang="scss">
  @import "styles/global.scss";

  html {
    @apply h-full w-full bg-[rgb(247,248,250)];

    font-family: $fontFamily;
  }

  body {
    @apply h-full w-full;
  }

  #app {
    @apply h-full w-full;
  }
</style>
