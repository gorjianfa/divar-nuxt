<template>
  <div>
    <div class="tw-mr-20 tw-px-2">
      <div class="tw-max-w-[488px] tw-h-auto tw-w-full">
        <div class="tw-flex tw-flex-col tw-w-full">
          <div class="tw-max-w-[488px] tw-h-auto tw-w-full tw-relative">
            <div class="">
              <img
                :src="require('@/assets/img/products-img/' + img)"
                alt=""
                class="tw-w-full tw-h-full tw-max-w-[488px] tw-max-h-[366px] tw-flex tw-rounded"
              />
            </div>
            <!--left and right SVG-->
            <div class="tw-flex tw-items-center tw-justify-between">
              <div class="tw-absolute -tw-right-0 tw-bottom-[11.5rem]">
                <!--right arrow-->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  class="tw-stroke-white tw-w-full tw-h-full tw-max-w-[23px] tw-max-h-[23px] tw-flex"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <div class="tw-absolute -tw-left-0 tw-bottom-[11.5rem]">
                <!--left arrow-->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  class="tw-stroke-white tw-w-full tw-h-full tw-max-w-[23px] tw-max-h-[23px] tw-flex"
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

          <div class="tw-max-w-[488px] tw-h-auto tw-w-full tw-mt-4">
            <div class="tw-flex tw-items-center tw-gap-3 tw-w-full">
              <div class="" v-for="(item, i) in picture" :key="i">
                <img
                  :src="require('@/assets/img/products-img/' + item.img)"
                  alt=""
                  class="tw-w-[68px] tw-h-[68px] tw-flex tw-rounded"
                />
              </div>
            </div>
          </div>

          <div class="tw-mt-4 tw-relative">
            <textarea
              v-model="innerValue"
              name="text"
              id=""
              placeholder="یادداشت شما .."
              class="kt-textarea__field tw-resize-none hover:tw-border-gray-500 tw-cursor-text focus-within:tw-outline-red-600/50 focus:tw-outline-red-600/50 tw-border-gray-300 tw-font-normal tw-text-base tw-text-gray-800 tw-max-w-[480px] tw-px-4 tw-py-2 tw-block tw-h-[120px] tw-w-full"
            >
            </textarea>
            <div
              class="tw-flex tw-justify-end"
              v-if="innerValue.length > 1"
              @click="removeText"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                class="tw-absolute tw-bottom-5 tw-max-w-[16] tw-max-h-4 tw-flex tw-stroke-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </div>
          </div>
          <div class="base-text-xs tw-mt-1 tw-mb-3">
            یادداشت تنها برای شما قابل دیدن است و پس از حذف آگهی، پاک خواهد شد.
          </div>
          <div class="tw-max-w-[488px] tw-h-auto tw-w-full">
            <div class="tw-mt-3 tw-flex tw-flex-col tw-w-full">
              <div class="border-bottem tw-py-2">
                <div class="">
                  <!--question SVG-->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#6b7280"
                    class="tw-flex tw-w-full tw-h-full tw-cursor-pointer tw-max-w-[20px] tw-max-h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <div class="base-text-sm">راهنمای خرید امن</div>
              </div>
              <div class="border-bottem tw-py-2">
                <div class="">
                  <!--warming SVg-->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#6b7280"
                    class="tw-flex tw-w-full tw-h-full tw-cursor-pointer tw-max-w-[20px] tw-max-h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <div class="base-text-sm">ثبت تخلف و مشکل آگهی</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    picture: {
      type: Array,
      default: () => [],
    },
    img: {
      type: String,
      default: 'house.jpg',
    },
  },
  data() {
    return {
      innerValue: '',
    }
  },
  methods: {
    removeText() {
      this.innerValue = ''
    },
  },
}
</script>

<style lang="scss" scoped></style>
