<!--
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-31 23:24:40
 * @LastEditors: ydfk
 * @LastEditTime: 2021-09-09 23:11:45
-->
<template>
  <van-cell-group inset>
    <span class="flex justify-center mb-5 text-xl font-bold">记账</span>
    <van-radio-group class="flex justify-center" v-model="account.type" direction="horizontal">
      <van-radio :name="1" checked-color="red">支出</van-radio>
      <van-radio :name="0" checked-color="green">收入</van-radio>
    </van-radio-group>
    <van-field left-icon="label-o" class="mt-5" size="large" clearable v-model="account.remark" label="分类" placeholder="分类" />
    <van-field left-icon="bill-o" size="large" readonly v-model="showAmount" label="金额" />
    <van-field
      left-icon="bookmark-o"
      rows="5"
      show-word-limit
      autosize
      clearable
      type="textarea"
      size="large"
      maxlength="500"
      v-model="account.category"
      label="备注"
      placeholder="备注"
    />
  </van-cell-group>
  <van-number-keyboard
    :show="true"
    theme="custom"
    extra-key="."
    close-button-text="完成"
    v-model="amount"
    safe-area-inset-bottom
    :hide-on-click-outside="false"
    @blur="onSubmit"
    @input="onInput"
  />
  {{ amount }}
</template>
<script lang="ts" setup>
  import { AccountTypeEnum } from "@/enums/accountEnum";
  import { AccountModel } from "@/models/account";
  import { formatMoney } from "@/utils/numberUtil";
  import { Toast } from "vant";

  const props = defineProps({
    id: { type: String },
  });

  let amount = $ref("0");

  let account = $ref<AccountModel>({
    id: "",
    date: new Date(),
    amount: 0,
    category: "",
    remark: "",
    type: AccountTypeEnum.Expenditure,
  });

  let showAmount = $computed(() => formatMoney(parseFloat(amount)));

  const onInput = (value: string) => {
    console.log("🚀 ~ file: AddAcount.vue ~ line 67 ~ onInput ~ value", value);
    if (value == "." && amount.indexOf(".") > 0) {
      return "";
    }
  };

  const onSubmit = () => {
    if (!account.category) {
      Toast("需要一个分类呀😝");
    } else {
      if (account.amount == 0) {
        Toast("金额不能为空吧🤣");
      } else {
        let msg = "😤拼命保存中！";

        if (account.amount > 500) {
          msg = `😍 收入好多呀，${msg}`;
        } else if (account.amount < -500) {
          msg = `🥺 花了好多呀，${msg}`;
        }

        Toast.loading({
          duration: 0,
          forbidClick: true,
          message: msg,
        });

        let second = 3;
        const timer = setInterval(() => {
          second--;
          if (second) {
          } else {
            Toast.success("保存成功😆");
            clearInterval(timer);
            Toast.clear();
          }
        }, 1000);
      }
    }
  };
</script>
