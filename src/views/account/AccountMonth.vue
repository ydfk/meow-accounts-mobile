<!--
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-29 19:49:10
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-29 20:09:25
-->
<template>
  <div v-for="account in accounts" :key="account.id" class="flex justify-evenly">
    <span>{{ account.category }}</span>
    <span>{{ account.amount }}</span>
    <span>{{ account.type }}</span>
  </div>
</template>
<script lang="ts" setup>
  import { AccountModel } from "@/models/account";
  import { onMounted, PropType } from "vue";

  const props = defineProps({
    accounts: { type: Array as PropType<AccountModel[]>, required: true },
  });

  onMounted(() => {
    console.log("🚀 ~ file: AccountMonth.vue ~ line 22 ~ accounts", props.accounts);
  });
</script>
