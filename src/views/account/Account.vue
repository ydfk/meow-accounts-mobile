<!--
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-28 21:02:14
 * @LastEditors: ydfk
 * @LastEditTime: 2021-09-12 22:03:01
-->
<template>
  <van-sticky position="top">
    <div class="flex justify-center content-box divide-x-1">
      <div class="w-[20%] flex justify-center">
        <div>
          <div class="font-bold">{{ currentYear }}年</div>
          <div class="font-bold">{{ currentMonth }}月 <van-icon name="arrow-down" color="#3f90ff" @click="onSelectDate" /></div>
        </div>
      </div>

      <div class="w-[60%]">
        <van-skeleton round :row="2" :loading="loadingAccounts">
          <div class="flex justify-around">
            <div class="flex flex-col">
              <span class="font-bold">收入</span>
              <span class="font-bold">支出</span>
            </div>
            <div class="flex flex-col">
              <span class="font-bold text-right text-green-500">{{ totalIncome }}</span>
              <span class="font-bold text-right text-red-500">{{ totalExpenditure }}</span>
            </div>
          </div>
        </van-skeleton>
      </div>
      <div class="w-[20%] flex justify-center">
        <van-button class="rounded-full w-[48px] h-[48px]" icon="plus" type="primary" @click="showAdd = true" />
      </div>
    </div>
  </van-sticky>

  <van-pull-refresh v-model="loadingAccounts" @refresh="fetchAccount" class="p-4">
    <van-skeleton round title avatar :row="15" :loading="loadingAccounts"><AccountMonth :accounts="accounts" /></van-skeleton>
  </van-pull-refresh>

  <van-popup v-model:show="showDatePicker" position="bottom" round>
    <van-datetime-picker
      v-model="datePickerDate"
      type="year-month"
      title="选择年月"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="onChangeDate"
      @cancel="showDatePicker = false"
  /></van-popup>
  <van-popup v-model:show="showAdd" class="h-full" position="bottom" closeable :close-on-click-overlay="false">
    <AddAccount />
  </van-popup>
</template>
<script lang="ts" setup>
  import dayjs from "dayjs";
  import { onMounted } from "vue";
  import { AccountModel } from "@/models/account";
  import { apiGetAccountByMonth } from "@/apis/account";
  import { AccountTypeEnum } from "@/enums/accountEnum";
  import { formatMoney } from "@/utils/numberUtil";
  import AccountMonth from "./AccountMonth.vue";
  import AddAccount from "./AddAcount.vue";
  import { reduceAccountAmount } from "./common";

  let loadingAccounts = $ref(true);
  const minDate = new Date(2010, 0, 1);
  const maxDate = new Date(2050, 11, 1);
  let currentDate = $ref(new Date());
  let currentYear = $computed(() => dayjs(currentDate).year());
  let currentMonth = $computed(() => dayjs(currentDate).month() + 1);

  let datePickerDate = $ref(new Date());
  let showDatePicker = $ref(false);

  let accounts = $ref<AccountModel[]>([]);
  let totalIncome = $computed(() => formatMoney(reduceAccountAmount(accounts, AccountTypeEnum.Income)));
  let totalExpenditure = $computed(() => formatMoney(reduceAccountAmount(accounts, AccountTypeEnum.Expenditure)));

  let showAdd = $ref(false);

  const onSelectDate = () => {
    datePickerDate = currentDate;
    showDatePicker = !showDatePicker;
  };

  const onChangeDate = async (value: Date) => {
    currentDate = value;
    showDatePicker = false;
    await fetchAccount();
  };

  const fetchAccount = async () => {
    loadingAccounts = true;

    const fetchAccounts = await apiGetAccountByMonth(currentYear, currentMonth);
    for (const account of fetchAccounts) {
      account.type = account.amount > 0 ? AccountTypeEnum.Income : AccountTypeEnum.Expenditure;
    }

    accounts = fetchAccounts;
    loadingAccounts = false;
  };

  onMounted(async () => {
    if (!accounts || accounts.length == 0) {
      await fetchAccount();
    }
  });
</script>
