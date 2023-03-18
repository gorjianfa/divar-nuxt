<template>
  <div>
    <div class="tw-w-full tw-h-auto tw-max-w-[556px] tw-bg-white tw-rounded">
      <div class="">
        <div
          class="tw-w-full tw-max-w-[490px] tw-h-auto tw-pt-8 tw-px-8 tw-pb-4 border-bottem tw-bg-white"
        >
          <div class="tw-flex tw-flex-col tw-gap-3">
            <div class="tw-flex tw-justify-between tw-items-center">
              <span class="tw-font-medium tw-text-2xl tw-text-gray-800"
                >انتخاب شهر</span
              >
              <div class="" v-if="removeAll">
                <span class="tw-font-normal tw-text-base tw-text-red-600"
                  >حذف همه</span
                >
              </div>
            </div>

            <!--choose a  city-->
            <div class="">
              <!--v-if="x"-->
              <div class="">
                <span class="tw-font-normal tw-text-base tw-text-gray-500">
                  حداقل یک شهر را انتخاب کنید</span
                >
              </div>

              <!--butten city-->
              <div
                class="tw-w-full tw-max-w-[72px] tw-pr-3 tw-pl-1 tw-py-1 tw-bg-red-50 tw-rounded-3xl tw-border-solid tw-border tw-border-red-600"
              >
                <div class="tw-flex tw-justify-between tw-items-center">
                  <div
                    class="tw-font-normal tw-text-base tw-text-red-700 tw-cursor-text"
                  >
                    {{ city }}
                  </div>
                  <div class="tw-cursor-pointer tw-p-1">
                    <!--close svg-->

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="tw-w-full tw-max-w-[16px] tw-h-4 tw-stroke-red-700 tw-flex hover:tw-rounded-full hover:tw-bg-red-100"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <!--input -->

            <div
              class="tw-cursor-text tw-w-full tw-max-w-[424px] tw-h-10 tw-ring-2 tw-ring-gray-300 hover:tw-ring-gray-500 tw-rounded-md focus:tw-ring-red-800 focus-within:tw-ring-red-800 focus:tw-ring-opacity-50 focus-within:tw-ring-opacity-50"
            >
              <div
                class="tw-px-4 tw-flex tw-items-center tw-justify-between tw-h-full"
              >
                <div class="tw-flex tw-items-center tw-gap-1">
                  <div class="tw-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="tw-max-w-6 tw-max-h-6 tw-w-full tw-fill-gray-500"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.00591 10.4961C6.00591 8.01109 8.02091 5.99609 10.5059 5.99609C12.9899 5.99609 15.0059 8.01109 15.0059 10.4961C15.0059 12.9811 12.9899 14.9961 10.5059 14.9961C8.02091 14.9961 6.00591 12.9811 6.00591 10.4961ZM19.0749 17.6601L15.7429 14.3291C16.5329 13.2531 17.0059 11.9301 17.0059 10.4961C17.0059 6.91209 14.0899 3.99609 10.5059 3.99609C6.92091 3.99609 4.00591 6.91209 4.00591 10.4961C4.00591 14.0801 6.92091 16.9961 10.5059 16.9961C11.9349 16.9961 13.2539 16.5271 14.3279 15.7421L17.6609 19.0741C17.8569 19.2691 18.1119 19.3671 18.3679 19.3671C18.6239 19.3671 18.8799 19.2691 19.0749 19.0741C19.4659 18.6841 19.4659 18.0511 19.0749 17.6601Z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    v-model="innerValue"
                    class="tw-flex tw-w-full tw-min-w-[324px] tw-outline-none tw-border-hidden tw-font-normal tw-text-base tw-text-gray-800"
                    placeholder="جستجو در شهر ها"
                  />
                </div>
                <div v-if="innerValue.length > 1" class="" @click="removeValue">
                  <!-- {{ svg }} -->
                  <div class="tw-cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                      class="tw-max-w-6 tw-max-h-6 tw-w-full tw-flex tw-h-full tw-fill-gray-600"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.4138 12.0003L16.2428 9.17134C16.6338 8.78134 16.6338 8.14834 16.2428 7.75734C15.8518 7.36734 15.2198 7.36734 14.8288 7.75734L11.9998 10.5863L9.1718 7.75734C8.7808 7.36734 8.1478 7.36734 7.7578 7.75734C7.3668 8.14834 7.3668 8.78134 7.7578 9.17134L10.5858 12.0003L7.7578 14.8293C7.3668 15.2193 7.3668 15.8523 7.7578 16.2433C7.9528 16.4383 8.2088 16.5363 8.4648 16.5363C8.7208 16.5363 8.9768 16.4383 9.1718 16.2433L11.9998 13.4143L14.8288 16.2433C15.0238 16.4383 15.2798 16.5363 15.5358 16.5363C15.7918 16.5363 16.0478 16.4383 16.2428 16.2433C16.6338 15.8523 16.6338 15.2193 16.2428 14.8293L13.4138 12.0003Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--scroller -->
      <div class="tw-w-full tw-max-w-[490px] tw-bg-white tw-px-8 tw-pt-4">
        <div class=" ">
          <div class="tw-h-40 tw-overflow-y-scroll kt-textarea__field">
            <StateItem
              v-for="(item, i) in list"
              :key="i"
              v-bind="item"
              class="tw-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      removeAll: '',
      innerValue: '',
      list: [
        { state: 'آذربایجان شرقی' },
        { state: 'آذر بایجان غربی' },
        { state: 'اردبیل' },
        { state: 'اصفهان' },
        { state: 'البرز' },
        { state: 'ایلام' },
        { state: 'بوشهر' },
        { state: 'تهران' },
        { state: 'چهار محال بختیاری ' },
        { state: 'خراسان جنوبی' },
        { state: 'خراسان رضوی' },
        { state: 'خراسان شمالی' },
        { state: 'خوزستان' },
        { state: 'زنجان' },
        { state: 'سمنان' },
        { state: 'سیستان و بلوچستان' },
        { state: 'فارس' },
        { state: 'قزوین' },
        { state: 'قم' },
        { state: 'کردستان' },

        { state: 'کرمان' },
        { state: 'کرمانشاه' },
        { state: 'کهگلویه و بویر احمد' },
        { state: 'گلستان' },
        { state: 'گیلان' },
        { state: 'لرستان' },
        { state: 'مازندران' },
        { state: 'مرکزی' },
        { state: 'هرمزگان' },
        { state: 'همدان' },
        { state: 'یزد' },
        { state: '' },
      ],
    }
  },

  props: {
    city: {
      type: String,
      default: 'بابلسر',
    },
  },
  methods: {
    hidetext() {
      this.removeAll = ''
    },
    removeValue() {
      this.innerValue = ''
    },
  },
}
</script>

<style lang="scss" scoped></style>
