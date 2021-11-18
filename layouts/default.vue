<template>
  <div>
    <CommonGradientBackground />
    <CommonNavbar class="absolute w-full"/>
    <div v-if="$nuxt.$route.path !== '/'" class="w-full h-20 mb-12"></div>
    <Nuxt class=""/>
    <CommonFooter />
  </div>
</template>