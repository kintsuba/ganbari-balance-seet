<template>
  <UContainer>
    <main class="absolute inset-0 flex items-center justify-center">
      <UCard class="w-full md:w-3/4 lg:w-3/5 xl:w-3/5">
        <template #header>
          <p class="text-xl">がんばりポイント</p>
        </template>

        <p class="my-8 text-center text-xl">
          <span class="mr-1 text-6xl">10</span>ポイント
        </p>

        <template #footer>
          <div class="flex justify-evenly">
            <UButton size="xl">がんばった！</UButton>
            <UButton size="xl" variant="outline">ごほうび</UButton>
          </div>
        </template>
      </UCard>
    </main>
  </UContainer>
</template>
