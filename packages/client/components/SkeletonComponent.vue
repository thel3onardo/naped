<template>
  <div class="skeleton w-100 h-100" />
</template>

<script>
export default {
  name: 'SkeletonComponent',
  inheritAttrs: true
}
</script>

<style lang="scss" scoped>

.skeleton {
   /* #351384 */
   background-color: #1a09428f;
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
      rgba(#351384, 0) 0,
      rgba(#351384, 0.2) 20%,
      rgba(#351384, 0.5) 60%,
      rgba(#351384, 0)
   );
   animation: shimmer 5s infinite;
  }
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
}
</style>