<template>
  <main class="flex flex-col">
    <div class="lg:px-32 hero-section pb-10 pt-20">
      <HomeHeroSection />
    </div>
    <div class="lg:px-32 about-us rounded-br-4xl sm:rounded-br-5xl">
      <HomeAboutUs />
    </div>

    <div class="lg:px-32 p-6">
      <HomeEvents />
    </div>
    <div class="lg:px-32 p-6 our-members">
      <HomeMembers />
    </div>
    <div class="lg:px-32 p-6 contact-us relative">
      <HomeContactUs />
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero-section {
  background: linear-gradient(
    to bottom,
    rgba(44, 193, 199, 0.8) 0%,
    rgba(217, 237, 146, 0.25) 70%,
    rgba(217, 237, 146, 0) 100%
  );
}

.about-us {
  backdrop-filter: blur(9px);
  background-image: url("@/assets/img/mcl-bg.png"),
    linear-gradient(
      304.9deg,
      #0085ff 6.73%,
      rgba(0, 161, 206, 0.770759) 22.41%,
      rgba(0, 164, 200, 0.743331) 26.79%,
      rgba(0, 198, 141, 0.466623) 46.16%,
      rgba(0, 255, 41, 0) 77.97%,
      rgba(0, 148, 255, 0) 77.97%
    );
}

.contact-us {
  background: linear-gradient(
    to right,
    rgba(31, 97, 153, 1),
    rgba(139, 210, 189, 1)
  );
}

.our-members {
  background-image: linear-gradient(
    to top,
    rgba(44, 193, 199, 0.8) 0%,
    rgba(217, 237, 146, 0.2) 75%,
    rgba(217, 237, 146, 0) 100%
  );
}
</style>
