<template>
  <div class="tw-group ">
    <button
      class="tw-cursor-pointer tw-inline-flex tw-items-center tw-justify-center tw-w-full tw-px-4 tw-py-2.5 tw-rounded group-hover:tw-transition-all group-hover:tw-delay-100"
      :class="variantClass"
    >
      <!-- eslint-disable-next-line vue/require-component-is -->
      <Component
        class="tw-no-underline   tw-hidden tw-outline-none"
        v-bind="linkAdress"
      ></Component>
      <div class="tw-flex tw-items-center  tw-gap-1">
        <!--قبل-->
        <div class="" v-if="prependIcon">
          <img
            :src="'img/' + prependIcon"
            alt=""
            class="tw-w-full tw-h-full tw-max-h-5 tw-max-w-[20px] tw-flex"
          />
        </div>
        <span class="tw-truncate" :class="textClass">
          {{ title }}
        </span>
        <!--بعد-->
        <div class="" v-if="apendIcon">
          <img
            :src="'img/' + apendIcon"
            alt=""
            class="tw-w-full tw-h-full tw-max-h-5 tw-max-w-[20px] tw-flex"
          />
        </div>
      </div>
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
    apendIcon: {
      type: String,
      default: '',
    },
    prependIcon: {
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

    textSize: {
      type: String,
      default: 'baseGray',
      validator(value) {
        return ['xSmall', 'small', 'baseGray', 'baseWhite'].includes(value)
      },
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
    const textClass = computed(() => {
      return {
        xSmall:
          'tw-font-medium tw-text-sm tw-text-gray-500 group-hover:tw-text-gray-700',
        small: 'tw-font-medium tw-text-sm tw-text-white ',
        baseGray:
          'tw-font-medium tw-text-base tw-text-gray-500 group-hover:tw-text-gray-900',
        baseWhite: 'tw-font-medium tw-text-base tw-text-white ',
      }[props.textSize]
    })

    const variantClass = computed(() => {
      return {
        default:
          'tw-border-hidden tw-min-w-[100px]  tw-bg-red-800  group-hover:tw-bg-opacity-90 tw-mr-2',
        fill: 'tw-border-hidden tw-max-w-[126px]  tw-bg-red-700  group-hover:tw-bg-opacity-90',
        hover:
          'tw-border-hidden tw-min-w-[100px] tw-bg-white group-hover:tw-bg-gray-100 ',
        outline:
          'tw-max-w-[126px]  tw-border tw-border-gray-300 tw-border-solid tw-bg-white group-hover:tw-bg-gray-100 ',
      }[props.variant]
    })

    const linkAdress = computed(() => {
      const { href, to } = props

      if (to?.length) {
        return {
          is: 'nuxt-link',
          to,
        }
      } else if (href?.length) {
        return {
          is: 'a',
          href,
        }
      } else {
        return {
          is: 'button',
        }
      }
    })

    return {
      variantClass,
      textClass,
      linkAdress,
    }
  },
})
</script>

<style lang="scss" scoped></style>
