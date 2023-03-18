<template>
  <div>
    <div class="tw-w-full tw-h-full tw-max-w-[404px]">
      <div class="tw-flex tw-flex-col">
        <div class="tw-flex tw-items-center tw-justify-between">
          <div class="tw-text-2xl tw-font-medium tw-text-gray-900">
            {{ title }}
          </div>
          <div class="" v-if="picture">
            <img
              :src="require('@/assets/img/user-profile/' + img)"
              alt=""
              class="tw-w-full tw-h-full tw-flex tw-max-w-[58px] tw-max-h-[58px]"
            />
          </div>
        </div>
        <div class="tw-mt-2 tw-mb-4">
          <span class="text-information-list tw-text-gray-500">{{
            loadingTime
          }}</span>
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
    loadingTime: {
      type: String,
      default: '',
    },
    picture: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
