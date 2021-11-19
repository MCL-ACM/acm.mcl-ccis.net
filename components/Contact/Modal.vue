<template>
  <div class="
    fixed
    inset-0
    bg-gray-100
    bg-opacity-80
    flex
    justify-center
    items-center
    z-40
  ">
    <div class=" bg-white flex flex-col space-y-8 md:p-20 p-10 m-16 max-w-2xl rounded-3xl ">
      <header class="text-xl md:text-5xl font-bold md:mb-4 text-dark-blue">
        <slot name="header">
          Thank you for contacting us!
        </slot>
        
      </header>

      <section class="md:text-2xl">
        <slot name="body">
          There will be no official transactions using this service. For formal transactions and possible partnerships, we will reply with the email you have provided.
          If you have not received a reply from us, please make sure that you have provided the correct email address.
        </slot>
       </section>

      <footer class="">
        <slot name="footer">
          
        </slot>
        <Button
          @clicked="close()"
          text="I agree"
        >
          I agree
        </Button>
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