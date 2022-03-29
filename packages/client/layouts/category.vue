<template>
  <div class="container-fluid bg-dark">
    <div class="container-xl margin-x-auto row w-100 justify-content-center">
      <nav-bar />
      <Nuxt keep-alive :keep-alive-props="{ max: 10 }"/>
      <Footer />
    </div>
  </div>
</template>
