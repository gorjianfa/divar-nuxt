<template>
  <div>
    <div class="tw-w-full tw-max-w-[250px] tw-h-auto tw-pl-4">
      <div class="tw-flex tw-gap-2">
        <div class="tw-font-normal tw-text-xs tw-text-gray-400 tw-mt-1.5">
          {{ amountOf }}
        </div>

        <div class="tw-flex tw-flex-col">
          <!--border-->
          <div
            @click="openList"
            class="tw-w-full tw-min-w-[197px] tw-h-8 tw-border-solid tw-border tw-rounded tw-border-gray-300 hover:tw-border-gray-500 tw-cursor-pointer"
          >
            <div
              class="tw-flex tw-items-center tw-justify-between tw-px-2 tw-py-2"
            >
              <span class="tw-font-normal tw-text-xs tw-text-gray-300"
                >مثلا 70,000,000</span
              >
              <span class="tw-flex tw-items-center tw-gap-1">
                <span class="tw-font-normal tw-text-xs tw-text-gray-300"
                  >تومان</span
                >
                <!--down arrow-->
                <span
                  class="tw-transition-transform tw-duration-700"
                  :class="price ? 'tw-rotate-180  ' : 'tw-rotate-0'"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#6b7280"
                    class="tw-w-full tw-h-full tw-max-h-4 tw-max-w-[16px] tw-flex"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </span>
            </div>
          </div>
          <!--v-if-->
          <div v-if="price" class="">
            <!--white input search-->
            <div
              class="tw-mt-1 tw-bg-white tw-w-full tw-max-w-[197px] tw-h-11 tw-shadow tw-rounded"
            >
              <div class="tw-flex tw-items-center tw-gap-1 tw-px-2 tw-py-1.5">
                <div class="">
                  <!--search svg-->
                  <svg
                    class="tw-w-full tw-h-full tw-max-w-[16px] tw-max-h-4 tw-flex tw-stroke-gray-200"
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
                <div class="">
                  <input
                    placeholder="جستجو"
                    type="text"
                    class="tw-w-full tw-max-w-[170px] tw-text-xs tw-font-light tw-text-gray-600 tw-border-hidden tw-outline-none"
                  />
                </div>
              </div>
            </div>
            <!--scroller list price-->
            <div class="tw-bg-white tw-w-full tw-max-w-[197px]">
              <div class="tw-h-40 tw-overflow-y-scroll kt-textarea__field">
                <div class="tw-flex tw-flex-col tw-z-20">
                  <span
                    class="tw-py-1.5 tw-rounded-sm tw-pr-4 tw-pl-2 tw-bg-gray-100 tw-font-normal tw-text-xs tw-text-gray-600"
                    >وارد کردن مقدار دلخواه</span
                  >
                  <div
                    class=""
                    v-for="(item, i) in list"
                    :key="i"
                    v-bind="item"
                  >
                    <li
                      class="tw-cursor-pointer tw-list-none tw-bg-w hover:tw-bg-gray-100 tw-py-1.5 tw-pr-4 tw-pl-2 tw-font-normal tw-text-xs tw-text-gray-600"
                    >
                      {{ item.number }}
                    </li>
                  </div>
                </div>
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
    amountOf: {
      type: String,
      default: 'حداقل',
    },
  },

  data() {
    return {
      price: false,
      list: [
        { number: ' 20 هزار', id: '1' },
        { number: ' 50 هزار', id: '2' },
        { number: ' 100 هزار', id: '3' },
        { number: ' 200 هزار', id: '4' },
        { number: ' 500 هزار', id: '5' },
        { number: ' 800 هزار ', id: '6' },
        { number: '1میلیون', id: '7' },
        { number: '2میلیون', id: '8' },
        { number: '5میلیون', id: '9' },
        { number: '10میلیون', id: '10' },
        { number: '50میلیون', id: '11' },
        { number: '100میلیون', id: '12' },
        { number: '200میلیون', id: '13' },
      ],
    }
  },
  methods: {
    openList() {
      this.price = !this.price
    },
  },
}
</script>

<style lang="scss" scoped></style>
