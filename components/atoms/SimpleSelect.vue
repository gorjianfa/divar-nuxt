<template>
  <div>
    <div class="tw-w-full tw-h-full tw-max-w-[248px] tw-bg-white" @click="listVisible">
      <div class="tw-py-5" >
        <div class="tw-flex tw-gap-2 tw-items-center tw-w-full">
          <div
            class="tw-transition-transform tw-duration-700"
            :class="fluctuation ? 'tw-rotate-180  ' : 'tw-rotate-0'"
          >
            <!--down svg-->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#6b7280"
              class="tw-max-w-[16px] tw-max-h-4 tw-w-full tw-h-full tw-flex tw-stroke-gray-800"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div class="tw-font-medium tw-text-xs tw-text-gray-900">
            {{ value }}
          </div>
        </div>
        
      </div>
    </div>
    <div class="tw-py-4 tw-pl-4" v-if="fluctuation">
          <FormPriceFluctuation amountOf="حداقل" class="" />
          <div class="tw-mr-6">
            <svg
              width="6"
              height="12"
              viewBox="0 0 2 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="2" height="4" rx="1" fill="#D9D9D9" />
              <rect y="5" width="2" height="2" rx="1" fill="#D9D9D9" />
              <rect y="8" width="2" height="4" rx="1" fill="#D9D9D9" />
            </svg>
          </div>
          <FormPriceFluctuation amountOf="حداکثر" />
        </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      fluctuation: false,
    }
  },
  methods: {
    listVisible() {
      this.fluctuation = !this.fluctuation
    },
  },
}
</script>

<style lang="scss" scoped></style>
