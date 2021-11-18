<template>
  <section class="relative px-32 pb-20">
      <div class="absolute inset-0 w-full bg-gradient-to-t from-sea-green via-white to-transparent opacity-70"/>
        <div class="relative flex flex-row justify-between">
            <div class="flex-grow max-w-xl">
                <h1 class="text-5xl font-bold mb-8 text-dark-blue ">Contact Us</h1>
                <ContactForm/>
            </div>
            <div class="">
                <div class="pt-10">
                    <ContactSocial/>
                </div>
                <div class="pt-10">
                    <ContactMap/>
                </div>
            </div>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>