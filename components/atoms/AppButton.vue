<template>
  <div class="tw-group">
    <!-- eslint-disable-next-line vue/require-component-is -->
    <Component
      class="tw-cursor-pointer tw-no-underline tw-outline-none tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2.5 tw-rounded group-hover:tw-transition-all group-hover:tw-delay-100"
      :class="variantClass"
      v-bind="[$attrs, linkAdress]"
      v-on="$listeners"
    >
      <div
        class="tw-flex tw-items-center tw-gap-1 tw-whitespace-nowrap tw-shrink-0"
      >
        <!--قبل-->
        <div class="" v-if="prependIcon">
          <Component
            :is="prependIcon"
            class="tw-w-full tw-h-full tw-max-h-5 tw-max-w-[20px] tw-flex group-hover:tw-stroke-gray-900"
          />
        </div>
        <span class="" :class="textClass">
          {{ title }}
        </span>
        <!--بعد-->
        <div class="" v-if="apendIcon">
          <Component
            :is="apendIcon"
            class="tw-w-full tw-h-full tw-max-h-5 tw-max-w-[20px] tw-flex group-hover:tw-stroke-gray-900"
          />
        </div>
      </div>
    </Component>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'
import location from '~/assets/img/location.svg?inline'
import downArrow from '~/assets/img/downArrow.svg?inline'
import user from '~/assets/img/user.svg?inline'
import chat from '~/assets/img/chat.svg?inline'

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
  components: { location, downArrow, user, chat },
  setup(props) {
    const textClass = computed(() => {
      return {
        xSmall:
          'tw-font-medium tw-text-xs tw-text-gray-500 group-hover:tw-text-gray-900',
        small: 'tw-font-medium tw-text-sm tw-text-white ',
        baseGray:
          'tw-font-medium tw-text-base tw-text-gray-500 group-hover:tw-text-gray-900',
        baseWhite: 'tw-font-medium tw-text-base tw-text-white ',
      }[props.textSize]
    })

    const variantClass = computed(() => {
      return {
        default:
          'tw-border-hidden tw-bg-red-800  group-hover:tw-bg-opacity-90 tw-mr-2',
        fill: 'tw-border-hidden   tw-bg-red-800  group-hover:tw-bg-opacity-90',
        hover: 'tw-border-hidden tw-bg-white group-hover:tw-bg-gray-100 ',
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
