<template>
  <div>
    <i v-if="icon.includes('el-icon')" :class="icon" />
    <SvgIcon v-else :icon="icon" />
    <span>{{ title }}</span>
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon";
export default {
  name: "MenuItem",
  props: {
    icon: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: {
    SvgIcon,
  },
};
</script>

<style scoped lang="scss"></style>
