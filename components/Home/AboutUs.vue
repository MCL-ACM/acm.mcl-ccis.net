<template>
  <div class="h-screen overflow-hidden">
    <div class="flex flex-col items-center text-center h-full">
      <!-- Wave on top -->
      <div class="about-us-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            d="M0 0H1440C1055 21 1073.5 66 799 107.5C524.5 149 204.5 -17 0 166V0Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
      <!-- Background of text -->
      <div class="text-bg"></div>

      <!-- Main Content of About Us -->
      <div class="my-auto">
        <p class="font-bold text-4xl text-dark-blue">About Us</p>
        <p class="text-xl max-w-4xl p-4 mt-4 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ultricies
          habitant id porttitor etiam sem commodo, blandit sit. Fringilla est
          amet pellentesque massa purus vel pretium velit. Ipsum varius urna
          varius iaculis massa quis. Diam molestie nisl ultricies ultrices.
        </p>
        <a href="about">
          <Button text="Learn more about MCL-ACM" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about-us-wave {
  position: absolute;
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

  filter: blur(100px);
}
</style>
