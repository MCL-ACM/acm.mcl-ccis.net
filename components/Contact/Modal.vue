<template>
  <div class="
    fixed
    inset-0
    bg-gray-100
    bg-opacity-80
    flex
    justify-center
    items-center
  ">
    <div class="">
      <header class="">
        <slot name="header">
          This is the default title!
        </slot>
        <button
          type="button"
          class="btn-close"
          @click="close"
        >
          x
        </button>
      </header>

      <section class="">
        <slot name="body">
          This is the default body!
        </slot>
       </section>

      <footer class="">
        <slot name="footer">
          This is the default footer!
        </slot>
        <button
          type="button"
          class="btn-green"
          @click="close"
        >
          Close Modal
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
}
</script>

<style>

</style>