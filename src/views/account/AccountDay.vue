<!--
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-29 19:46:00
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-31 00:16:50
-->
<template>
  <div class="w-full">
    <van-cell-group inset>
      <template #title>
        <div class="flex justify-between">
          <span class="m-text-gray block text-center">{{ accountGroupDay.dateOfDay }}</span>
          <span>
            <span class="m-text-gray text-green-400" v-if="totalIncome > 0">收 {{ formatMoney(totalIncome) }}</span>
            <span class="m-text-gray text-red-400 ml-2" v-if="totalExpenditure > 0">支 {{ formatMoney(totalExpenditure) }}</span>
          </span>
        </div>
      </template>
      <van-swipe-cell v-for="account in accountGroupDay.accounts" :key="account.id" :beforeClose="onBeforeClose">
        <van-cell :title="account.category" @click="onCellClick">
          <template #value>
            <span>{{ `${amountSymbol(account.type)}${formatMoney(account.amount)}` }}</span>
          </template>
        </van-cell>
        <template #right>
          <van-button square type="danger" text="删除" />
        </template>
      </van-swipe-cell>
    </van-cell-group>
  </div>
</template>
<script lang="ts" setup>
  import { AccountTypeEnum } from "@/enums/accountEnum";
  import { AccountGroupDayModel } from "@/models/account";
  import { computed, PropType } from "vue";
  import { reduceAccountAmount } from "./common";
  import { formatMoney } from "@/utils/numberUtil";
  import { Dialog } from "vant";

  const props = defineProps({
    accountGroupDay: { type: Object as PropType<AccountGroupDayModel>, required: true },
  });

  const totalIncome = computed(() => reduceAccountAmount(props.accountGroupDay.accounts, AccountTypeEnum.Income));
  const totalExpenditure = computed(() => reduceAccountAmount(props.accountGroupDay.accounts, AccountTypeEnum.Expenditure));

  const amountSymbol = (type: AccountTypeEnum) => (type == AccountTypeEnum.Income ? "+" : "-");

  const onCellClick = (position) => {
    console.log("🚀 ~ file: AccountDay.vue ~ line 51 ~ onCellClick ~ position", position);
  };

  const onBeforeClose = ({ position }) => {
    switch (position) {
      case "left":
      case "cell":
      case "outside":
        return true;
      case "right":
        return new Promise((resolve) => {
          Dialog.confirm({
            title: "确定删除吗？",
          }).then(resolve);
        });
    }
  };
</script>
