<!--
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-31 23:24:40
 * @LastEditors: ydfk
 * @LastEditTime: 2021-09-10 22:51:10
-->
<template>
  <van-cell-group inset>
    <span class="flex justify-center mt-2 mb-5 text-xl font-bold">记账</span>
    <van-radio-group class="flex justify-center" v-model="account.type" direction="horizontal">
      <van-radio :name="1" checked-color="red">支出</van-radio>
      <van-radio :name="0" checked-color="green">收入</van-radio>
    </van-radio-group>
    <van-field left-icon="label-o" class="mt-5" size="large" clearable v-model="account.category" label="分类" placeholder="分类" />
    <van-cell icon="completed" center title="是否有收据">
      <template #right-icon>
        <van-switch v-model="account.receipt" size="24" />
      </template>
    </van-cell>
    <van-field
      left-icon="bookmark-o"
      rows="5"
      show-word-limit
      autosize
      clearable
      type="textarea"
      size="large"
      maxlength="500"
      v-model="account.remark"
      label="备注"
      placeholder="备注"
    />
  </van-cell-group>
  <van-number-keyboard
    :show="true"
    theme="custom"
    extra-key="."
    close-button-text="完成"
    safe-area-inset-bottom
    :hide-on-click-outside="false"
    @blur="onSubmit"
    @input="onInput"
    @delete="onDelete"
  >
    <template #title-left>
      <div class="pl-2 text-xl font-semibold"><van-icon name="bill-o" /> 金额 {{ showAmount }}</div>
    </template>
  </van-number-keyboard>
</template>
<script lang="ts" setup>
  import { AccountTypeEnum } from "@/enums/accountEnum";
  import { AccountModel } from "@/models/account";
  import { formatMoney } from "@/utils/numberUtil";
  import { Toast } from "vant";
  import { watchEffect } from "vue-demi";

  const props = defineProps({
    id: { type: String },
  });

  let amountString = $ref("0");

  let account = $ref<AccountModel>({
    id: "",
    date: new Date(),
    amount: 0,
    category: "",
    remark: "",
    type: AccountTypeEnum.Expenditure,
    receipt: false,
  });

  let showAmount = $computed(() => formatMoney(account.amount));

  watchEffect(() => {
    if (amountString) {
      account.amount = parseFloat(amountString);
    } else {
      account.amount = 0;
    }

    if (account.type == AccountTypeEnum.Expenditure) {
      account.amount = 0 - account.amount;
    }
  });

  const onInput = (value: string) => {
    if (amountString.indexOf(".") > 0) {
      const decimal = amountString.split(".")[1];
      if (decimal.length >= 2) {
        return;
      }

      if (value == ".") {
        return;
      }
    }

    amountString = `${amountString}${value}`;
  };

  const onDelete = () => {
    if (amountString.length > 0) {
      amountString = amountString.substring(0, amountString.length - 1);
      if (amountString.lastIndexOf(".") == amountString.length - 1) {
        amountString = amountString.substring(0, amountString.length - 1);
      }
    }
  };

  const onSubmit = () => {
    console.log("🚀 ~ file: AddAcount.vue ~ line 108 ~ onSubmit ~ account", account);
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
