<template>
  <div class="container-fluid bg-dark">
    <div class="container-xl margin-x-auto row w-100 justify-content-center">
      <NavBar />
      <Nuxt keep-alive :keep-alive-props="{ max: 2 }"/>
      <Footer />
    </div>
  </div>
</template>
