<template>
  <div>
    <div
      class="  tw-w-full tw-max-w-[610px] tw-h-full tw-max-h-24 tw-border-solid tw-border tw-border-gray-300 tw-mb-4 tw-group"
    >
      <a :href="href" class="tw-no-underline ">
        <div class="tw-flex tw-items-center  tw-p-4">
          <div class="tw-ml-4">
            <img
              :src="'img/business/' + img"
              alt=""
              class="tw-w-full tw-max-w-[64px] tw-max-h-16 tw-flex"
            />
          </div>
          <div class="tw-w-full tw-max-w-[449px] tw-max-h-8">
            <div class="tw-flex tw-flex-col">
              <span class="tw-font-normal tw-text-base tw-text-gray-800">
                {{ title }}
              </span>
              <span class="tw-font-normal tw-text-sm tw-text-gray-500">{{
                description
              }}</span>
            </div>
          </div>
          <div
            class="tw-p-3 group-hover:tw-bg-gray-100 tw-bg-white group-hover:tw-rounded-full tw-cursor-pointer"
          >
            <!--left arrow-->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="tw-w-full tw-h-full tw-max-h-5 tw-max-w-[20px] tw-flex tw-stroke-gray-400 group-hover:tw-stroke-gray-800"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '#',
    },
    img: {
      type: String,
      default: 'car.svg',
    },
    title: {
      type: String,
      default: 'نمایشگاه اتومبیل شما در دیوار',
    },
    description: {
      type: String,
      default: 'فعالیت حرفه‌ای در بازار آنلاین خودرو',
    },
  },
}
</script>

<style lang="scss" scoped></style>
