<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4 nanumBrush">Brand Colors</div>
      <q-separator class="q-my-md" />
      <div class="bg-primary">Primary</div>
      <div class="bg-secondary">Secondary</div>
      <div class="bg-accent">Accent</div>
      <div class="bg-dark">Dark</div>
      <div class="bg-positive">Positive</div>
      <div class="bg-negative">Negative</div>
      <div class="bg-info">Info</div>
      <div class="bg-warning">Warning</div>
    </section>

    <section class="q-mb-xl">
      <div class="text-h4 nanumBrush">Color List</div>
      <q-separator class="q-my-md" />
      <div class="bg-red-6">red-6</div>
      <div class="bg-lime-7">lime-7</div>
      <div class="bg-pink-4">pink-4</div>
      <div class="bg-yellow-8">yellow-8</div>
      <div class="bg-teal-14">teal-14</div>
    </section>

    <section class="q-mb-xl">
      <div class="text-h4 nanumBrush">Text</div>
      <q-separator class="q-my-md" />
      <div class="q-pa-md q-gutter-sm">
        <div class="text-primary bg-grey-2 rounded-borders q-pa-xs">
          Text Primary
        </div>
        <div class="text-secondary bg-grey-8 rounded-borders q-pa-xs">
          Text Secondary
        </div>
        <div class="text-red-6 bg-grey-10 rounded-borders q-pa-xs">
          Text Red
        </div>
        <div class="text-ynjch bg-ynjch rounded-borders q-pa-xs">YNJCH</div>
      </div>
    </section>

    <section class="q-mb-xl">
      <div class="text-h4 nanumBrush">Components</div>
      <q-separator class="q-my-md" />
      <div class="q-pa-md q-gutter-sm">
        <q-btn label="버튼" color="primary" text-color="yellow-7"></q-btn>
        <q-btn label="버튼" color="ynjch" text-color="ynjch"></q-btn>
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
