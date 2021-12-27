<template>
  <div class="container-fluid bg-dark">
    <div class="container-xl row margin-x-auto">
      <div class="col-12 px-0">
        <NavBar />
      </div>
      <Nuxt keep-alive :keep-alive-props="{ max: 5 }"/>
    </div>
  </div>
</template>