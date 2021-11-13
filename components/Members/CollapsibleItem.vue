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
    <transition name="content-transition">
      <div v-if="!collapsed">
        <slot name="content"></slot>
      </div>
    </transition>
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
  transition: transform 0.08s ease;
}

.hide-chevron {
  transform: rotate(-90deg);
  transition: transform 0.08s ease;
}

.content-transition-enter-active,
.content-transition-leave-active {
  transition: max-height 0.4s ease;
  max-height: 1000px;
  overflow: hidden;
}

.content-transition-enter,
.content-transition-leave-to {
  max-height: 0;
  overflow: hidden;
}
</style>
