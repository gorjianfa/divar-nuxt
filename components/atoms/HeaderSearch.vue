<template>
  <div>
    <div
      class="tw-w-full tw-max-w-[480px] tw-h-auto tw-rounded tw-shadow tw-bg-gray-100 focus-within:tw-bg-white focus:tw-bg-white"
    >
      <div class="tw-flex tw-items-center tw-justify-between tw-px-2 tw-py-2">
        <div
          class="tw-flex tw-items-center tw-justify-center tw-gap-3 tw-w-full tw-h-full"
        >
          <!--search svg-->
          <div class="">
            <svg
              class="tw-stroke-gray-100 tw-w-full tw-h-full tw-max-w-[20px] tw-flex tw-max-h-[20px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.00591 10.4961C6.00591 8.01109 8.02091 5.99609 10.5059 5.99609C12.9899 5.99609 15.0059 8.01109 15.0059 10.4961C15.0059 12.9811 12.9899 14.9961 10.5059 14.9961C8.02091 14.9961 6.00591 12.9811 6.00591 10.4961ZM19.0749 17.6601L15.7429 14.3291C16.5329 13.2531 17.0059 11.9301 17.0059 10.4961C17.0059 6.91209 14.0899 3.99609 10.5059 3.99609C6.92091 3.99609 4.00591 6.91209 4.00591 10.4961C4.00591 14.0801 6.92091 16.9961 10.5059 16.9961C11.9349 16.9961 13.2539 16.5271 14.3279 15.7421L17.6609 19.0741C17.8569 19.2691 18.1119 19.3671 18.3679 19.3671C18.6239 19.3671 18.8799 19.2691 19.0749 19.0741C19.4659 18.6841 19.4659 18.0511 19.0749 17.6601Z"
              ></path>
            </svg>
          </div>
          <!--input-->
          <div class="tw-w-full">
            <input
              @focus="isFocused = true"
              @blur="isFocused = false"
              type="text"
              class="tw-outline-none tw-border-hidden focus-within:tw-bg-white focus:tw-bg-white tw-bg-gray-100 tw-w-full tw-max-w-[350px] tw-text-sm tw-font-normal tw-text-gray-800"
              :placeholder="isFocused ? '' : placeholder"
              v-model="inputText"
            />
          </div>
        </div>
        <!--CLOSE SVG-->
        <div
          class="tw-p-1 tw-rounded-full tw-bg-white hover:tw-bg-gray-200"
          v-if="inputText.length > 1"
          @click="removeText"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
            class="tw-w-full tw-h-full tw-max-w-[20px] tw-max-h-5 tw-flex tw-stroke-gray-500"
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

    <!--card the most searched-->

    <div
      class="tw-w-full tw-max-w-[480px] tw-h-auto tw-rounded tw-fixed tw-shadow tw-bg-gray-50    "
      v-if="inputText"
    >
      <div class="tw-flex tw-flex-col tw-pb-6 tw-px-6">
        <p class="base-text-sm">بیشترین جستجوهای دیوار</p>
        <div class="tw-grid tw-grid-cols-4  tw-mt-5  tw-gap-4">
          <div class="" v-for="item in list" :key="item">
            <a
              :href="href"
              class="  base-text-xs tw-whitespace-nowrap tw-p-2 tw-no-underline tw-rounded-3xl tw-border-solid tw-border tw-border-gray-300"
            >
              {{ item.title }}
            </a>
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
      inputText: '',
      placeholder: ' جستجوی در همه آگهی ها',
      isFocused: false,
      list: [
        {
          title: 'خودرو سواری ',
        },
        {
          title: 'فروش اپارتمان',
        },
        {
          title: 'اجاره اپارتمان',
        },
        {
          title: 'موبایل',
        },
        {
          title: 'صندلی و نیمکت',
        },
        {
          title: 'خدمات',
        },
        {
          title: 'استخدام',
        },
        {
          title: 'وسایل شخصی',
        },
        {
          title: 'حیوانات',
        },
        {
          title: 'تلویزیون',
        },
      ],
    }
  },

  methods: {
    removeText() {
      this.inputText = ''
    },
  },
}
</script>

<style lang="scss" scoped></style>
