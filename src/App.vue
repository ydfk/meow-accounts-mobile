<!--
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-24 17:24:45
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-31 22:16:06
-->
<template>
  <van-config-provider class="h-full" :theme-vars="themeVars">
    <RouterView />
  </van-config-provider>
</template>

<script lang="ts" setup>
  const themeVars = {
    cellGroupInsetPadding: 0,
    cellGroupInsetTitlePadding: "1vh 1.5vh",
    cellGroupTitleFontSize: "0.9rem",
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
