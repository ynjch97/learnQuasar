<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4 nanumBrush">Spacing</div>
      <q-separator class="q-my-md" />
      <div class="bg-primary q-pa-xs q-mt-md">
        <div class="bg-dark text-white">
          There are CSS classes supplied by Quasar to help you with spacing for
          DOM elements or components.
        </div>
      </div>
      <div class="bg-primary q-pa-sm q-mt-md">
        <div class="bg-dark text-white">
          There are CSS classes supplied by Quasar to help you with spacing for
          DOM elements or components.
        </div>
      </div>
      <div class="bg-primary q-pa-md q-mt-md">
        <div class="bg-dark text-white">
          There are CSS classes supplied by Quasar to help you with spacing for
          DOM elements or components.
        </div>
      </div>
      <div class="bg-primary q-pa-lg q-mt-md">
        <div class="bg-dark text-white">
          There are CSS classes supplied by Quasar to help you with spacing for
          DOM elements or components.
        </div>
      </div>
      <div class="bg-primary q-pa-xl q-mt-md">
        <div class="bg-dark text-white">
          There are CSS classes supplied by Quasar to help you with spacing for
          DOM elements or components.
        </div>
      </div>
    </section>

    <section class="q-mb-xl">
      <div class="text-h4 nanumBrush">Components</div>
      <q-separator class="q-my-md" />
      <q-card
        class="my-card bg-secondary text-white q-mx-auto"
        style="width: 400px"
      >
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section>
          {{ lorem }}
        </q-card-section>

        <q-separator dark />

        <q-card-actions>
          <q-btn outline padding="md">Action 1</q-btn>
          <q-btn outline padding="none">Action 2</q-btn>
        </q-card-actions>
      </q-card>
    </section>

    <section class="q-mb-xl">
      <div class="text-h4 nanumBrush">중앙 정렬</div>
      <q-separator class="q-my-md" />
      <div
        class="bg-primary q-mt-md flex flex-center"
        style="width: 100%; height: 400px"
      >
        <div class="bg-dark text-white" style="width: 100px; height: 100px">
          중앙 정렬
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup></script>

<style lang="scss" scoped>
p {
  color: $yellow-6;
  background-color: $grey-7;
}
</style>
