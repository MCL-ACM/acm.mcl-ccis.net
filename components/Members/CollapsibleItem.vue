<template>
  <div>
    <button @click="toggleCollapse()">
      <slot name="header">Collapse</slot>
    </button>
    <div v-show="!collapsed">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    collapsed: false,
  }),
  methods: {
    toggleCollapse() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style lang="scss" scoped></style>
