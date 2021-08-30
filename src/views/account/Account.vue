<!--
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-28 21:02:14
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-30 23:17:07
-->
<template>
  <van-sticky position="top">
    <div class="flex justify-center content-box divide-x-1">
      <div class="w-[20%] flex justify-center">
        <div>
          <div class="font-semibold">{{ currentYear }}年</div>
          <div class="font-semibold">{{ currentMonth }}月 <van-icon name="arrow-down" color="#3f90ff" @click="onSelectDate" /></div>
        </div>
      </div>

      <div class="w-[60%]">
        <van-skeleton round :row="2" :loading="loadingAccounts">
          <div class="flex justify-around">
            <div class="flex flex-col">
              <span class="font-thin">收入</span>
              <span class="font-thin">支出</span>
            </div>
            <div class="flex flex-col">
              <span class="font-thin text-right text-green-500">{{ totalIncome }}</span>
              <span class="font-thin text-right text-red-500">{{ totalExpenditure }}</span>
            </div>
          </div>
        </van-skeleton>
      </div>
      <div class="w-[20%] flex justify-center">
        <van-button class="rounded-full w-[48px] h-[48px]" icon="plus" type="primary" />
      </div>
    </div>
  </van-sticky>

  <van-pull-refresh v-model="loadingAccounts" @refresh="fetchAccount" class="p-4">
    <van-skeleton round title avatar :row="15" :loading="loadingAccounts"><AccountMonth :accounts="accounts" /></van-skeleton>
  </van-pull-refresh>

  <van-popup v-model:show="showDatePicker" position="bottom" round safe-area-inset-bottom>
    <van-datetime-picker
      v-model="datePickerDate"
      type="year-month"
      title="选择年月"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="onChangeDate"
      @cancel="showDatePicker = false"
  /></van-popup>
</template>
<script lang="ts" setup>
  import dayjs from "dayjs";
  import { computed, onMounted, ref } from "vue";
  import { AccountModel } from "@/models/account";
  import { accountApi } from "@/apis/account";
  import { AccountTypeEnum } from "@/enums/accountEnum";
  import { formatMoney } from "@/utils/numberUtil";
  import AccountMonth from "./AccountMonth.vue";
  import { reduceAccountAmount } from "./common";

  const loadingAccounts = ref(true);
  const minDate = new Date(2010, 0, 1);
  const maxDate = new Date(2050, 11, 1);
  const currentDate = ref(new Date());
  const currentYear = computed(() => dayjs(currentDate.value).year());
  const currentMonth = computed(() => dayjs(currentDate.value).month() + 1);

  const datePickerDate = ref(new Date());
  const showDatePicker = ref(false);

  const accounts = ref<AccountModel[]>([]);
  const totalIncome = computed(() => formatMoney(reduceAccountAmount(accounts.value, AccountTypeEnum.Income)));
  const totalExpenditure = computed(() => formatMoney(reduceAccountAmount(accounts.value, AccountTypeEnum.Expenditure)));

  const onSelectDate = () => {
    datePickerDate.value = currentDate.value;
    showDatePicker.value = !showDatePicker.value;
  };

  const onChangeDate = async (value: Date) => {
    currentDate.value = value;
    showDatePicker.value = false;
    await fetchAccount();
  };

  const fetchAccount = async () => {
    loadingAccounts.value = true;
    const begin = dayjs(currentDate.value).startOf("M").toDate();
    const end = dayjs(currentDate.value).endOf("M").toDate();
    accounts.value = await accountApi(begin, end);
    loadingAccounts.value = false;
  };

  onMounted(async () => {
    await fetchAccount();
  });
</script>
