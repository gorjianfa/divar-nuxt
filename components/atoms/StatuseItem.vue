<template>
  <div>
    <div
      class="tw-w-full tw-h-full tw-max-w-[248px] tw-bg-white"
      @click="statuseVisible"
    >
      <div class="tw-py-5">
        <div class="tw-flex tw-gap-2 tw-items-center tw-w-full">
          <div
            class="tw-transition-transform tw-duration-700"
            :class="toggleVisible ? 'tw-rotate-180  ' : 'tw-rotate-0'"
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
            وضعیت آگهی
          </div>
        </div>
      </div>
    </div>
    <div class="tw-p-4" v-if="toggleVisible">
      <div
        class="tw-font-medium tw-text-xs tw-text-red-800 tw-mr-52 tw-mb-4"
        v-if="delet"
      >
        حذف
      </div>
      <FormToggleInput status="فقط عکس دار" class="tw-mb-4" />

      <FormToggleInput status="فقط فوری" />
    </div>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      toggleVisible: false,
      delet:true
    }
  },
  methods: {
    statuseVisible() {
      this.toggleVisible = !this.toggleVisible
    },
  },
}
</script>

<style lang="scss" scoped></style>
