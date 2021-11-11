<template>
  <div>
    <div class="">
      <img
        src="@/assets/mcl-acm-logo.png"
        alt="MCL-ACM Logo"
        class="w-80 h-auto mt-10 "
      />
      <p class="font-bold text-5xl leading-tight">
        Malayan Colleges Laguna <br />
        ACM Student Chapter
      </p>
    </div>
    <div class="">
      <p class="text-lg font-bold">Est. 2018</p>
    </div>
    <div class="text-right mt-20">
      <p class="text-xl">Promoting Excellence in Modern Computing</p>
      <p class="text-lg">A platform for students and enthusiasts alike</p>
    </div>
    <img src="@/assets/svg/solid-diamond-1.svg" class="left-diamond bg-detail"/>
    <img src="@/assets/svg/solid-diamond-2.svg" class="right-diamond-solid-1 bg-detail"/>
    <img src="@/assets/svg/solid-diamond-3.svg" class="right-diamond-solid-2 bg-detail"/>
    <img src="@/assets/svg/outline-diamond.svg" class="right-diamond-outline-1 bg-detail"/>
    <img src="@/assets/svg/outline-diamond.svg" class="right-diamond-outline-2 bg-detail"/>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>


.bg-detail{
  position:absolute;
  margin: 0;
  z-index: 0;
}

.left-diamond{
  top:30%;
  left:0;
}

.right-diamond-solid-1{
  top:5%;
  right:0%;
}

.right-diamond-solid-2{
  top:30%;
  right:0%;
}

.right-diamond-outline-1{
  top:15%;
  right:5%;
}

.right-diamond-outline-2{
  top:45%;
  right:15%;
}
</style>
