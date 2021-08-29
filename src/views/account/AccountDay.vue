<!--
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-29 19:46:00
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-30 00:41:39
-->
<template>
  <div class="w-full m-t-2 m-x-4">
    <div>{{ accountGroupDay.dateOfDay }}</div>
    <div v-for="account in accountGroupDay.accounts" :key="account.id" class="flex justify-around content-box">
      <span>{{ account.category }}</span>
      <span>{{ account.amount }}</span>
      <span>{{ account.type }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { AccountGroupDayModel } from "@/models/account";
  import { PropType } from "vue";
  defineProps({
    accountGroupDay: { type: Object as PropType<AccountGroupDayModel>, required: true },
  });
</script>
