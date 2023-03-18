<template>
  <div>
    <div class="tw-flex tw-mt-20 tw-container">
      <div class=""><ListInternalList class="" /></div>

      <div
        class="tw-w-full tw-max-w-[488px] tw-h-full tw-py-8 tw-px-4 tw-mr-60"
      >
        <div class="tw-flex tw-flex-col">
          <p class="base-text-sm">
            تأیید هویت برای افزایش اعتماد کاربران و سلامت تعاملات انجام می‌شود.
            اطلاعات شناسایی شما در هیچ صفحه‌ای نمایش داده نمی‌شود. حساب شما در
            دیوار با شمارهٔ{{ phoneNumber }} فعال است.
          </p>
          <div class="tw-flex tw-flex-col tw-mt-4">
            <span class="tw-pt-4 tw-font-medium tw-text-base tw-text-gray-800">
              ملیت
            </span>
            <span class="base-text-xs tw-my-2">ملیت خود را انتخاب کنید</span>
            <div
              class="tw-w-full tw-max-w-[488px] tw-max-h-10 tw-h-full tw-border-solid tw-border-2 tw-border-gray-300 tw-rounded"
            >
              <div
                class="tw-flex tw-items-center tw-justify-between tw-px-4 tw-py-1.5"
              >
                <div class="tw-font-normal tw-text-base tw-text-gray-700">
                  {{ nationality }}
                </div>
                <div
                  class="tw-transition-transform tw-duration-1000"
                  @click="listVisible"
                  :class="showList ? 'tw-rotate-180' : 'tw-rotate-0'"
                >
                  <!--down svg-->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#6b7280"
                    class="tw-w-full tw-h-full tw-max-w-[20px] tw-max-h-5 tw-flex"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div
              class="tw-w-full tw-max-w-[488px] tw-mt-1 tw-shadow-md"
              v-if="showList"
            >
              <li
                class="tw-list-none tw-bg-gray-100 tw-font-normal tw-text-sm tw-text-red-700 tw-px-3 tw-py-2"
              >
                ایرانی
              </li>
              <li
                class="tw-list-none tw-bg-white tw-delay-200 tw-transition hover:tw-bg-gray-100 tw-font-normal tw-text-sm tw-text-gray-400 tw-px-3 tw-py-2 tw-cursor-pointer"
              >
                اتباع خارجی
              </li>
            </div>

            <AppInput
              title="کد ملی "
              description="لطفاً کد ملی خود را وارد کنید."
            />

            <div class="tw-w-full tw-max-w-[488px]">
              <div
                class="tw-px-4 tw-py-2 tw-bg-red-800 tw-cursor-pointer tw-rounded tw-mt-10 tw-text-white tw-flex tw-justify-center"
              >
                ثبت
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
  layout: 'dashboard',
  props: {
    phoneNumber: {
      type: String,
      default: '09904216609',
    },

    nationality: { type: String, default: 'ایرانی' },
  },
  data() {
    return {
      showList: false,
    }
  },
  methods: {
    listVisible() {
      this.showList = !this.showList
    },
  },
}
</script>

<style lang="scss" scoped></style>
