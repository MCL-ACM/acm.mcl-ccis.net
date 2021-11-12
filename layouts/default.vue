<template>
  <div>
    <CommonGradientBackground />
    <CommonNavbar class="absolute w-full"/>
    <div v-if="$nuxt.$route.path !== '/'" class="w-full h-24"></div>
    <Nuxt />
    <CommonFooter />
  </div>
</template>