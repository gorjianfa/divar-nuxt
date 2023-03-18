<template>
  <div class="">
    <div class="tw-flex tw-flex-col">
      <div class="tw-flex tw-flex-col tw-pt-4 tw-pb-2">
        <span class="tw-font-medium tw-text-base tw-text-gray-800 tw-flex">{{
          title
        }}</span>
        <div v-if="description" class="base-text-xs tw-mt-2">
          {{ description }}
        </div>
      </div>
      <div
        class="tw-pl-2 tw-flex tw-justify-between tw-items-center tw-w-full tw-max-w-[484px] tw-h-10 tw-ring-2 tw-ring-gray-300 hover:tw-ring-gray-500 tw-rounded-md focus:tw-ring-red-800 focus-within:tw-ring-red-800 focus:tw-ring-opacity-50 focus-within:tw-ring-opacity-50"
      >
        <input
          :placeholder="placeholder"
          type="text"
          class="tw-cursor-text tw-text-gray-800 tw-text-sm tw-font-normal tw-outline-none tw-border-hidden tw-w-full tw-max-w-[300px] tw-px-4 tw-py-0.5"
        />
        <slot name="append" class=""> </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    priceUnit: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'مثال: ۰۰۲۰۰۶۸۹۰۰',
    },
  },
}
</script>

<style lang="scss" scoped></style>
