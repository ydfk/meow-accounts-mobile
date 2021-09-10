<!--
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-24 17:24:45
 * @LastEditors: ydfk
 * @LastEditTime: 2021-09-10 22:51:48
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
    font-size: 16px !important;
  }

  body {
    @apply h-full w-full;

    touch-action: pan-x pan-y;
  }

  #app {
    @apply h-full w-full;
  }

  input:focus {
    font-size: 16px !important;
  }
</style>
