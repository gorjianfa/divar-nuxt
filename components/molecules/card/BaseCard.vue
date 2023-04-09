<template>
  <div>
    <div class="tw-p-2 tw-w-full tw-max-w-[335px] tw-h-[167px]">
      <a href="#" class="tw-no-underline">
        <article
          class="tw-mb-4 tw-p-4 tw-flex tw-cursor-pointer tw-rounded-md tw-border-[1px] tw-border-solid tw-border-gray-200 tw-bg-white"
        >
          <div
            class="tw-flex tw-flex-col tw-w-full tw-h-full tw-max-w-[141.66px] tw-max-h-[136px]"
          >
            <div class="tw-mb-4 tw-max-w-[141px] tw-w-full tw-truncate">
              <span class="tw-font-medium tw-text-base tw-text-black">{{
                title
              }}</span>
            </div>
            <div class="">
              <span class="base-text-sm tw-pl-5"> {{ amountOfuse }}</span>
            </div>
            <div class="">
              <span class="base-text-sm tw-pl-5"> تومان {{ price }}</span>
            </div>

            <div class="">
              <span class="base-text-xs">{{ timeOraddres }}</span>
            </div>
          </div>
          <!--chat svg-->
          <div class="tw-flex tw-flex-col tw-justify-end">
            <div class="tw-flex tw-w-full">
              <svg
                class="tw-flex tw-w-[20px] tw-h-5 tw-stroke-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                />
              </svg>
            </div>
          </div>

          <div class="tw-flex tw-w-full">
            <img
              :src="require('@/assets/img/main/' + img)"
              alt=""
              class="tw-flex tw-w-full tw-h-full tw-max-w-[136px] tw-max-h-[116px] tw-rounded-md tw-mr-1"
            />
          </div>
        </article>
      </a>
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
    price: {
      type: String,
      default: '',
    },
    timeOraddres: {
      type: String,
      default: '',
    },
    amountOfuse: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: 'building.jpg',
    },
  },
}
</script>

<style lang="scss" scoped></style>
