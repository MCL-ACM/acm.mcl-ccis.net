<template>
  <div class="min-h-screen">
    <div class="sm:mt-20 z-20">
      <div>
        <img
          src="@/assets/mcl-acm-logo.png"
          alt="MCL-ACM Logo"
          class="w-80 h-auto"
        />
        <p class="font-bold text-5xl leading-tight">
          Malayan Colleges Laguna <br />
          ACM Student Chapter
        </p>
      </div>
      <div class="est p-1 pr-2 pl-8 inline-block text-white">
        <p class="text-xl">est. 2018</p>
      </div>
      <div class="text-right mt-20">
        <p class="text-xl">Promoting Excellence in Modern Computing</p>
        <p class="text-lg">A platform for students and enthusiasts alike</p>
      </div>
    </div>

    <div class="bg-details">
      <img id="left-diamond" src="@/assets/svg/solid-diamond-1.svg" />
      <img id="right-diamond-solid-1" src="@/assets/svg/solid-diamond-2.svg" />
      <img id="right-diamond-solid-2" src="@/assets/svg/solid-diamond-3.svg" />
      <img
        id="right-diamond-outline-1"
        src="@/assets/svg/outline-diamond.svg"
      />
      <img
        id="right-diamond-outline-2"
        src="@/assets/svg/outline-diamond.svg"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.est {
  background-color: rgba(52, 160, 164, 0.4);
  position: relative;
  left: -24px;
}

.bg-details > * {
  position: absolute;
  margin: 0;
  z-index: -1;
}

#left-diamond {
  top: 30%;
  left: 0;
}

#right-diamond-solid-1 {
  top: 5%;
  right: 0%;
}

#right-diamond-solid-2 {
  top: 30%;
  right: 0%;
}

#right-diamond-outline-1 {
  top: 15%;
  right: 5%;
}

#right-diamond-outline-2 {
  top: 45%;
  right: 15%;
}
</style>
