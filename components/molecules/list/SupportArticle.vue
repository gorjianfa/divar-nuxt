<template>
  <div class="tw-px-2">
    <div class="tw-w-full tw-h-full tw-max-h-[362px] tw-max-w-[389.5px]">
      <div class="tw-pb-8">
        <div class="tw-flex tw-flex-col tw-gap-3">
          <div class="">
            <img
              :src="require('@/assets/img/support-list/' + img)"
              alt=""
              class="tw-w-full tw-h-full tw-flex tw-max-w-[64px] tw-max-h-[64px]"
            />
          </div>
          <div
            class="tw-cursor-pointer tw-font-medium tw-text-black tw-text-base"
          >
            {{ title }}
          </div>
          <div class="tw-flex tw-flex-col tw-gap-1">
            <a
              :href="link"
              class="tw-cursor-pointer tw-no-underline base-text-xs-hover tw-list-none"
              v-for="(item, i) in features"
              :key="i"
            >
              {{ item.question }}
            </a>
          </div>
          <a
            :href="href"
            class="tw-cursor-pointer tw-no-underline tw-font-normal tw-text-sm tw-text-red-700 tw-text-opacity-90"
            >موارد بیشتر</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: 'chat.png',
    },
    href: {
      type: String,
      default: '#',
    },
    link: {
      type: String,
      default: '#',
    },
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
