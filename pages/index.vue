<template>
  <main class="flex flex-col">
    <div class="lg:px-32 bg-gradient-to-b from-sea-green to-transparent pb-10 pt-20">
      <HomeHeroSection />
    </div>
    <div class="lg:px-32 pb-10">
      <HomeAboutUs />
    </div>
    <div class="lg:px-32 pb-10">
      <HomeEvents />
    </div>
    <div class="lg:px-32 mb-10">
      <HomeMembers />
    </div>
    <div class="lg:px-32 mb-10">
      <HomeContactUs />
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero-section{
   background-image: linear-gradient(to bottom right, rgba(44, 193, 199, 1), rgba(217, 237, 146, 0));
}
</style>
