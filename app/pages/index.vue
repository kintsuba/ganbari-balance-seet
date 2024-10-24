<template>
  <UContainer>
    <main class="h-screen">
      <section
        class="transition-transform"
        :class="{
          'translate-y-1/2': !showOptions,
          'translate-y-1/4': showOptions,
        }"
      >
        <UCard class="mx-auto w-full md:w-3/4 lg:w-3/5 xl:w-3/5">
          <template #header>
            <p class="text-xl">がんばりポイント</p>
          </template>

          <p
            class="text-center"
            :class="{
              'my-8 text-xl': !showOptions,
              'text-lg': showOptions,
            }"
          >
            <span
              class="mr-1"
              :class="{
                'text-6xl': !showOptions,
                'text-5xl': showOptions,
              }"
            >
              {{ store.point }}
            </span>
            ポイント
          </p>

          <template #footer>
            <div class="flex justify-evenly">
              <UButton size="xl" @click="clickButton('ganbari')"
                >がんばった！</UButton
              >
              <UButton
                size="xl"
                variant="outline"
                @click="clickButton('gohoubi')"
                >ごほうび</UButton
              >
            </div>
          </template>
        </UCard>
      </section>
      <TransitionGroup
        enter-active-class="duration-100 ease-out"
        enter-from-class="transform translate-x-16 opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="absolute duration-100 ease-out"
        leave-from-class="opacity-100"
        leave-to-class="transform translate-x-16 opacity-0"
        move-class="transform"
        tag="section"
        class="mt-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        <GanbariCard
          v-if="showOptions"
          v-for="ganbari in selectedOptions"
          :key="ganbari.name"
          :ganbari="ganbari"
          :selected="selected"
          @click="clickOption(ganbari.point)"
        />
      </TransitionGroup>
    </main>
  </UContainer>
</template>

<script setup lang="ts">
import { useLocalStorage } from "@vueuse/core";
import type { Ganbari } from "~/types/ganbari";
import type { State } from "~/types/state";
type SelectOption = "ganbari" | "gohoubi" | undefined;

const GanbariPointKey = "GANBARI_POINT_KEY";

const store = useLocalStorage<State>(GanbariPointKey, { point: 0 });

const selected = ref<SelectOption>(undefined);
const selectedOptions = computed(() => {
  if (selected.value === "ganbari") {
    return ganbaris.value;
  } else if (selected.value === "gohoubi") {
    return gohoubis.value;
  } else {
    return [];
  }
});
const showOptions = computed(() => selected.value !== undefined);

const clickButton = (clicked: SelectOption) => {
  if (selected.value === undefined) {
    selected.value = clicked;
  } else if (selected.value !== clicked) {
    selected.value = clicked;
  } else {
    selected.value = undefined;
  }
};

const clickOption = (point: number) => {
  console.log(`point1: ${typeof store.value.point}`);
  store.value.point += point;
};

const ganbaris = ref<Ganbari[]>([
  {
    name: "燃えるごみを捨てた",
    point: 2,
  },
  {
    name: "仕事を頑張った",
    point: 4,
  },
  {
    name: "資源ごみを捨てた",
    point: 16,
  },
  {
    name: "ペットボトルを1つ潰した",
    point: 1,
  },
]);

const gohoubis = ref<Ganbari[]>([
  {
    name: "1時間夜ふかし",
    point: -1,
  },
  {
    name: "お菓子を食べる",
    point: -1,
  },
  {
    name: "Uber Eatsを頼む",
    point: -2,
  },
]);
</script>
