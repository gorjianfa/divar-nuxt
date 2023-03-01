<template>
  <div>
    <div class="tw-flex tw-flex-col tw-w-full tw-h-auto tw-max-w-[236px]">
      <div class="tw-flex tw-flex-col">
        <div
          class="tw-font-normal tw-text-xs tw-text-gray-900 hover:tw-text-red-700 tw-my-2 tw-cursor-pointer"
        >
          {{ title }}
        </div>
        <div class="tw-flex tw-flex-col">
          <li
            class="tw-cursor-pointer tw-list-none tw-font-normal tw-text-xs tw-text-gray-500 hover:tw-text-red-700"
            v-for="(item, i) in features"
            :key="i"
          >
            {{ item.option }}
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    features: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped></style>
