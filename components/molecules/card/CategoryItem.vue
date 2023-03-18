<template>
  <div class="tw-group">
    <div
      class="tw-w-full tw-h-full tw-max-w-[160px] tw-max-h-8 tw-bg-white group-hover:tw-bg-gray-100 group-hover:tw-rounded"
    >
      <div class="tw-px-2 tw-py-1">
        <div
          class="tw-flex tw-items-center tw-justify-between tw-cursor-pointer"
        >
          <div class="tw-flex tw-items-center tw-gap-0.5">
            <!--svg and title-->
            <div class="">
              <img
                :src="require('@/assets/img/' + img)"
                alt=""
                class="tw-flex tw-w-full tw-h-full tw-max-h-[16px] tw-max-w-[16px]"
              />
            </div>
            <div class="">
              <span class="base-text-xs">{{ title }}</span>
            </div>
          </div>
          <!--left arrow-->
          <div class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="tw-flex tw-w-full tw-h-full tw-max-w-[16px] tw-max-h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
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
      default: 'amluk',
    },
    img: {
      type: String,
      default: 'house.svg',
    },
  },
}
</script>

<style lang="scss" scoped></style>
