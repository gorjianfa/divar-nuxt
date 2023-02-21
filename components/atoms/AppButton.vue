<template>
  <div>
    <button
      class="tw-justify-center tw-min-w-[6rem] tw-overflow-hidden tw-relative tw-w-full tw-max-w-[] tw-px-4 tw-cursor-pointer tw-inline-flex tw-gap-1 tw-items-center tw-bg-white tw-border-hidden tw-h-10 tw-rounded"
    >
      <slot name="before"></slot>
      <span class="tw-truncate">
        {{ title }}
      </span>
      <slot name="after"></slot>
      
    </button>
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
