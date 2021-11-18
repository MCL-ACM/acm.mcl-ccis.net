<template>
  <NuxtLink to="">
    <div class="event-card 
                relative 
                flex 
                flex-col 
                justify-end 
                h-full w-full 
                px-7 pb-7 pt-80 
                rounded-3xl 
                hover:shadow-2xl 
                block">
      <div>
        <p class="font-extralight text-lg">Jan. 1, 2021</p>
        <h2 class="font-bold text-2xl">Event Title Event Title Event Title</h2>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {

}
</script>

<style>
.event-card {
  background-image: linear-gradient(
    rgba(44, 193, 199, 0) 0%, 
    rgba(44, 193, 199, 0.45) 30%, 
    rgba(217, 237, 146, 1) 100%),
    url('../../assets/img/hoc.jpg');
  background-size: cover;
  background-position: center;
}
</style>