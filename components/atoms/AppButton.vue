<template>
  <div>
    <button
      class="tw-justify-center tw-inline-flex tw-gap-1 tw-items-center    tw-overflow-hidden  tw-w-full  tw-px-4 tw-cursor-pointer   tw-border-hidden tw-py-2.5 tw-rounded"
   :class="variantClass" >
      <slot name="before"></slot>
      <span class="tw-truncate">
        {{ title }}
      </span>
      <slot name="after"></slot>
    </button>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'

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
    to: {
      type: String,
      default: '',
    },
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
    variant: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'fill', 'outline', 'hover'].includes(value)
      },
    },
  },

  setup(props) {
    const variantClass = computed(() => {
      return {
        default: 'tw-max-w-[100px] tw-w-full tw-bg-red-600 tw-text-white tw-font-medium tw-text-base hover:tw-bg-opacity-75',
        fill: 'tw-max-w-[126px] tw-w-full tw-bg-red-600 tw-text-white tw-font-medium tw-text-base hover:tw-bg-opacity-75',
        hover: 'tw-max-w-[100px] tw-w-full  tw-bg-white hover:tw-bg-gray-100 tw-text-sm tw-font-medium tw-text-gray-500 hover:tw-text-black',
        outline: 'tw-max-w-[125px] tw-w-full tw-border tw-border-gray-300 tw-border-solid  tw-text-gray-500 tw-font-medium tw-text-base  tw-bg-white hover:tw-bg-gray-100 hover:tw-text-black',
      }[props.variant]
    })

    return {
      variantClass,
    }
  },
})
</script>

<style lang="scss" scoped></style>
