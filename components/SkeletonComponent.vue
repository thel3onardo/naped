<template>
  <div class="skeleton w-100 h-100" />
</template>

<script>
export default {
  name: 'SkeletonComponent'
}
</script>

<style lang="scss" scoped>

.skeleton {
   /* #351384 */
   background-color: #351384;
   width: 100%;
   height: 100%;
   position: relative;
   overflow: hidden;

   &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);
      background-image: linear-gradient(
      90deg,
      rgba(#501dc6, 0) 0,
      rgba(#501dc6, 0.2) 20%,
      rgba(#501dc6, 0.5) 60%,
      rgba(#501dc6, 0)
   );
   animation: shimmer 2.5s infinite;
  }
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
}
</style>