<!--
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-26 09:16:24
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-27 23:53:05
-->
<template>
  <div class="login">
    <div class="flex items-center shadow-md rounded-xl p-20 m-10"> </div>
  </div>
</template>

<script lang="ts">
  import { loginApi } from "@/apis/login";
  import { defineComponent, onMounted, ref } from "vue-demi";

  export default defineComponent({
    setup() {
      const user = ref({});

      onMounted(async () => {
        user.value = await loginApi("u", "p");
      });

      return {
        user: user,
      };
    },
  });
</script>

<style lang="scss" scoped></style>
