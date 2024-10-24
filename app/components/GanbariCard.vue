<template>
  <UCard
    v
    class="cursor-pointer hover:bg-primary-50 hover:shadow-md"
    :ui="{ body: { base: 'h-32' }, footer: { base: 'min-h-16' } }"
  >
    <p class="my-4 text-center text-xl">
      <span class="text-2xl">{{ ganbari?.name }}</span>
    </p>
    <template #footer>
      <p class="text-primary-500 text-center">
        {{ isGanbari ? "+" : "-" }}
        <span class="text-xl">{{
          isGanbari ? ganbari?.point : ganbari ? Math.abs(ganbari?.point) : ""
        }}</span>
        ポイント
      </p>
    </template>
  </UCard>
</template>
<script setup lang="ts">
import type { Ganbari } from "~/types/ganbari";

const props = defineProps<{
  ganbari?: Ganbari;
  selected?: "ganbari" | "gohoubi";
}>();

const isGanbari = computed(() => props.selected === "ganbari");
</script>
