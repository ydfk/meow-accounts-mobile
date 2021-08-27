import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  components: {},
  props: {},
  setup(props) {
    const state = reactive({});
    return {
      ...toRefs(state),
    };
  },
});
