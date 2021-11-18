<template>
  <section class="container">
    <div
      class="
        absolute
        inset-0
        w-full
      "
    />
    <h1 class="text-5xl font-bold mb-8 text-dark-blue">Contact Us</h1>

    <div class="relative flex md:flex-row flex-col gap-20">
      <div class="lg:w-1/2">
        <ContactForm />
      </div>
      <div class="flex-grow">
          <ContactSocial class="mb-10"/>
          <ContactMap />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
