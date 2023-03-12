<template>
  <div class="tw-group">
    <div
      class="tw-w-full tw-h-full tw-max-h-[48px] tw-max-w-[210px] tw-bg-white tw-px-4 group-hover:tw-bg-gray-100"
    >
      <div class="border-top tw-cursor-pointer">
        <nuxt-link :to="to" class="tw-no-underline">
          <div class="tw-flex tw-flex-col tw-mt-2">
            <div class="tw-flex tw-gap-2 tw-py-1 tw-items-center">
              <div class="">
                <img
                  :src="'img/' + img"
                  alt=""
                  class="tw-w-full tw-max-w-[16px] tw-max-h-4 tw-flex"
                />
              </div>
              <div class="">
                <span class="base-text-sm group-hover:tw-text-gray-900">{{
                  item
                }}</span>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: { type: String, default: 'اگهی های من' },
    img: {
      type: String,
      default: 'escape.svg',
    },
    to: {
      type: String,
      default: '# ',
    },
  },
}
</script>

<style lang="scss" scoped></style>
