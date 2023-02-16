<template>
  <div>
    <button class=" tw-justify-center tw-min-w-[6rem] tw-overflow-hidden tw-relative  tw-px-4 tw-cursor-pointer tw-inline-flex tw-items-center tw-bg-white hover:tw-bg-slate-50 tw-h-10 tw-rounded ">
      <slot name="befor"> </slot>
      <span
        class="tw-font-medium tw-text-base tw-text-gray-700 hover:tw-text-gray-900 tw-whitespace-nowrap"
      >
        {{ title }}
      </span>
      <slot name="after"></slot>
    </button>
    <p class="tw-font-bold tw-text-blue-500 tw-text-4xl">
      welcome to base page
    </p>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    apendicon: {
      type: String,
      default: '',
    },
    prependicon: {
      type: String,
      default: '',
    },
    to: { type: String, default: '' },
    href: {
      type: String,
      default: '',
    },
    size: {
      type: String,

      default: 'normal',
    },
    extraclass: {
      type: String,
      default: '',
    },
  },

  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped></style>
