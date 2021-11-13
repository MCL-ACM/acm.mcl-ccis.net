<template>
  <div>
    <button class="flex items-center mb-4" @click="toggleCollapse()">
      <!-- icon from https://www.iconfinder.com/icons/293663/down_chevron_icon -->
      <transition name="slide-fade">
        <img
          src="@/assets/svg/chevron.svg"
          alt=""
          :class="['h-3 mr-2', collapsed ? 'hide-chevron' : 'show-chevron']"
        />
      </transition>

      <slot name="header">Collapse</slot>
    </button>
    <div v-if="!collapsed">
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

<style lang="scss" scoped>
.show-chevron {
  transform: rotate(0deg);
  transition: transform .1s ease;
}

.hide-chevron {
  transform: rotate(-90deg);
  transition: transform .1s ease;
}
</style>
