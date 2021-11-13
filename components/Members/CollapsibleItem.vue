<template>
  <div>
    <button class="flex items-center mb-4" @click="toggleCollapse()">
        <!-- icon from https://www.iconfinder.com/icons/293663/down_chevron_icon -->
      <img src="@/assets/svg/chevron.svg" alt="" :class="['h-3 mr-2', collapsed ? 'transform -rotate-90' :  '']" />
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
