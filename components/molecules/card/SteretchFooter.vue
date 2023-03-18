<template>
  <div class="">
    <div class="tw-container tw-bg-white">
      <div class="tw-flex tw-items-center tw-justify-between tw-py-4">
        <div class="tw-flex tw-items-center tw-gap-2">
          <div class="">
            <img
              :src="require('@/assets/img/footer-logo.svg')"
              alt=""
              class="tw-w-full tw-h-full tw-max-h-[32px] tw-max-w-[32px] tw-flex"
            />
          </div>

          <div class="tw-flex tw-items-center">
            <div
              v-for="(item, i) in features"
              :key="i"
              class="tw-border-r tw-border-0 tw-border-solid tw-border-r-gray-300"
            >
              <a href="#" class="tw-no-underline tw-px-2 base-text-xs-hover">{{
                item.access
              }}</a>
            </div>
          </div>
        </div>
        <div class="tw-flex tw-items-center tw-gap-5">
          <a v-for="(item, i) in svg" :key="i" href="#" class="tw-no-underline"
            ><img
              :src="require('@/assets/img/' + item.img)"
              alt=""
              class="tw-w-full tw-h-full tw-flex tw-max-w-[20px] tw-max-h-5"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    features: {
      type: Array,
      default: () => [],
    },
    svg: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped></style>
