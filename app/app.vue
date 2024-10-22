<template>
  <GanbariHeader />
  <NuxtPage />
</template>

<script setup lang="ts">
const title = "がんばりバランスシート";

useHead({
  title,
  htmlAttrs: {
    lang: "ja",
    prefix: "og: http://ogp.me/ns#",
  },
});
</script>
