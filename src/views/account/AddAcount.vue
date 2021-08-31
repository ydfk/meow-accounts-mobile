<!--
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-31 23:24:40
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-31 23:40:53
-->
<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field v-model="account.category" name="分类" label="分类" placeholder="分类" :rules="[{ required: true, message: '请输入分类' }]" />
    </van-cell-group>
    <van-number-keyboard :show="true" theme="custom" extra-key="." close-button-text="完成" v-model="account.amount" safe-area-inset-bottom />
  </van-form>
</template>
<script lang="ts" setup>
  import { AccountTypeEnum } from "@/enums/accountEnum";
  import { AccountModel } from "@/models/account";
  import { ref } from "vue";
  const props = defineProps({
    id: { type: String },
  });
  const account = ref<AccountModel>({
    id: "",
    date: new Date(),
    amount: 0,
    category: "",
    remark: "",
    type: AccountTypeEnum.Expenditure,
  });

  const onSubmit = () => {};
</script>
