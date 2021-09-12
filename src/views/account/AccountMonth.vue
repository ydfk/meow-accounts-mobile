<!--
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-29 19:49:10
 * @LastEditors: ydfk
 * @LastEditTime: 2021-09-12 22:01:33
-->
<template>
  <van-empty description="暂无数据" v-if="accounts.length == 0" />
  <div v-else>
    <div v-for="account in accountGroupDays" :key="account.dateOfDay" class="flex justify-evenly w-full">
      <AccountDay :accountGroupDay="account" />
    </div>
    <span class="flex justify-center m-text-gray mt-2">没有更多数据了</span>
  </div>
</template>
<script lang="ts" setup>
  import { AccountGroupDayModel, AccountModel } from "@/models/account";
  import dayjs from "dayjs";
  import { PropType } from "vue";
  import AccountDay from "@/views/account/AccountDay.vue";

  const props = defineProps({
    accounts: { type: Array as PropType<AccountModel[]>, required: true },
  });

  let accountGroupDays = $computed<AccountGroupDayModel[]>(() => {
    if (props.accounts && props.accounts.length > 0) {
      const accountGroupDays: AccountGroupDayModel[] = [];

      for (const account of props.accounts) {
        const dateOfDay = dayjs(account.date).format("MM-DD");
        const accountGroupDay = accountGroupDays.find((f) => f.dateOfDay == dateOfDay);

        if (accountGroupDay) {
          accountGroupDay.accounts.push(account);
        } else {
          accountGroupDays.push({
            dateOfDay: dateOfDay,
            accounts: [account],
          });
        }
      }
      return accountGroupDays;
    } else {
      return [];
    }
  });
</script>
