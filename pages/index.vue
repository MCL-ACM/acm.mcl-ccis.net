<template>
  <main class="flex flex-col">
    <div class="lg:px-32 bg-gradient-to-b from-sea-green to-transparent pb-10 pt-20">
      <HomeHeroSection />
    </div>
    <div class="lg:px-32 p-10">
      <HomeAboutUs />
    </div>
    <div class="lg:px-32 p-10">
      <HomeEvents />
    </div>
    <div class="lg:px-32 p-20">
      <HomeMembers />
    </div>
    <div class="lg:px-32 p-10 contact-us">
      <HomeContactUs />
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero-section{
   background-image: linear-gradient(to bottom, rgba(44, 193, 199, 1), rgba(217, 237, 146, 0));
}

.contact-us{
   background-image: linear-gradient(to right, rgba(31, 97, 153, 1), rgba(139, 210, 189, 1));
}
</style>
