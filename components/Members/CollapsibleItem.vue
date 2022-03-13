<template>
  <div class="collapse-item">
    <button
      class="flex items-center py-3 w-full rounded-lg"
      @click="toggleCollapse()"
    >
      <!-- icon from https://www.iconfinder.com/icons/293663/down_chevron_icon -->
      <transition name="slide-fade">
        <img
          src="@/assets/svg/chevron.svg"
          alt=""
          :class="['h-3 mr-2', collapsed ? 'hide-chevron' : 'show-chevron']"
        />
      </transition>
      <p class="collapse-header"><slot name="header">Collapse</slot></p>
    </button>
    <transition name="content-transition">
      <div v-show="!collapsed" class="collapse-content">
        <slot></slot>
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
  overflow: hidden;
  max-height: 200rem;
}

.content-transition-enter,
.content-transition-leave-to {
  max-height: 0;
  overflow: hidden;
}

.collapse-header {
  @apply text-xl;
}

.collapse-item {
  @apply mx-2  sm:ml-8 mb-2;
}

.collapse-content {
  @apply mb-12 sm:ml-6;
}
</style>
