<template>
  <div class="relative max-w-full overflow-hidden">
    <!-- Wave on top -->
    <div class="about-us-wave">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          d="M0 0H1440C1055 21 1073.5 66 799 107.5C524.5 149 204.5 -17 0 166V0Z"
          fill="#FFFFFF"
        />
      </svg>
    </div>

    <div class="h-24"></div>

    <!-- Main Content of About Us -->
    <div
      class="
        flex flex-col
        my-auto
        h-screen
        items-center
        text-center
        justify-center
      "
    >
      <h1 class="font-bold text-5xl text-dark-blue">About Us</h1>
      <p class="text-xl max-w-4xl p-4 mt-4 mb-6">
        Malayan Colleges Laguna ACM Student Chapter is a student organization chartered by the Association for Computing 
        Machinery that aims to promote a greater interest in modern computing and its applications.
      </p>
      <NuxtLink to="about">
        <Button text="Learn more about MCL-ACM" />
      </NuxtLink>
    </div>

    <!-- Background Decorations -->
    <div class="bg-details overflow-hidden">
      <img id="dots-diamond" src="@/assets/svg/dots-diamond.svg" />
      <img id="line-diamond-1 sm:relative hidden" src="@/assets/svg/line-diamond-1.svg" />
      <img id="line-diamond-2" src="@/assets/svg/line-diamond-2.svg" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about-us-wave {
  position: absolute;
  left: 0;
  width: 100%;
  height: auto;
}
.text-bg {
  z-index: -1;
  position: absolute;
  height: 500px;
  width: 500px;
  max-height: 100%;
  max-width: 100%;

  top: 50%;
  transform: translateY(-50%);

  background: linear-gradient(
    0deg,
    rgba(255, 0, 245, 0.168) 28.65%,
    rgba(68, 64, 248, 0.138) 59.9%,
    rgba(0, 255, 209, 0) 100%
  );
}

.bg-details {
  overflow: hidden;
}

.bg-details > * {
  position: absolute;
}

#dots-diamond {
  top: 5%;
  right: 0;
}
#line-diamond-1 {
  top: 20%;
  right: 0;
}
#line-diamond-2 {
  top: 45%;
  right: 0;
}
</style>
