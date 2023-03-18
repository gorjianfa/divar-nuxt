<template>
  <div>
    <div class="tw-flex tw-mt-20 tw-container">
      <div class=""><ListInternalList class="" /></div>

      <div class="tw-w-full">
        <div class="tw-flex tw-justify-center tw-items-center border-bottem">
          <div class="tw-flex tw-items-center">
            <span
              @click="valueVisible('buy')"
              :class="
                activeValue === 'buy'
                  ? 'tw-bg-red-50 border-bottem-red  tw-text-red-700'
                  : 'hover:tw-bg-gray-50 tw-text-gray-400'
              "
              class="tw-transition-transform tw-duration-1000 tw-cursor-pointer tw-px-6 tw-py-2 tw-font-normal tw-text-base tw-whitespace-nowrap"
              >برای خرید</span
            >

            <span
              @click="valueVisible('sell')"
              :class="
                activeValue === 'sell'
                  ? 'tw-bg-red-50 border-bottem-red  tw-text-red-700'
                  : 'hover:tw-bg-gray-50 tw-text-gray-400'
              "
              class="tw-cursor-pointer tw-px-6 tw-py-2 tw-font-normal tw-text-base tw-whitespace-nowrap tw-transition-transform tw-duration-1000"
              >برای فروش</span
            >
          </div>
        </div>
        <!--برای خرید-->
        <div class="" v-if="activeValue==='buy'">
          <div
            class="tw-flex tw-flex-col tw-w-full tw-max-w-[523px] tw-mr-[269px]"
          >
            <span class="tw-py-4 base-text-sm border-bottem"
              >تاریخچهٔ بیعانه فقط تا ۳۰ روز نمایش داده می‌شود.</span
            >
            <span class="tw-py-4 base-text-xs tw-text-center"
              >هنوز پیشنهاد بیعانه ارسال نکرده‌اید.
            </span>
          </div>
        </div>

        <!--برای فروش-->
        <div class="" v-if="activeValue==='sell'">
          <div
            class="tw-flex tw-flex-col tw-w-full tw-max-w-[514px] tw-mr-[265px]"
          >
            <div class="tw-py-4 border-bottem">
              <span class="base-text-sm tw-whitespace-pre-line">
                {{
                  'با استفاده از امکان بیعانه، خریدار می‌تواند بعد از ارسالپیشنهاد بیعانه و تأیید فروشنده، از طریق سامانه‌های امن پرداختیمبلغ بیعانه را بپردازد. این مبلغ به‌مدت ۴۸ ساعت در حساب سامانهٔامن پرداختی به‌امانت می‌ماند تا خریدار وضعیت آن را مشخص کند. درصورت بروز مشکل می‌توانید پیشنهاد بیعانه را لغو یا آن را گزارشکنید تا پشتیبانی سامانهٔ امن پرداختی مشکل را بررسی و پیگیری کند.همچنین برای اطمینان از امنیت معامله، دو طرف (خریدار و فروشنده)ملزم به تأیید کردن هویت خود هستند. فعال کردن امکان بیعانه در ۲مرحله انجام می‌شود: ۱. مطالعه و تأیید قوانین دیوار و شرکت همکار۲\n. تکمیل اطلاعات هویتی'
                }}
              </span>
            </div>

            <div class="border-bottem tw-py-2">
              <div class="tw-flex tw-items-center tw-justify-between">
                <div class="tw-flex tw-items-center tw-gap-2">
                  <!--warning svg-->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#6b7280"
                    class="tw-max-w-[20px] tw-max-h-5 tw-w-full tw-h-full tw-flex"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
                    />
                  </svg>
                  <span class="tw-font-normal tw-text-base tw-text-gray-700"
                    >قوانین و شرایط بیعانه</span
                  >
                </div>
                <div class="">
                  <!--left arrow-->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="tw-max-w-[20px] tw-max-h-5 tw-w-full tw-h-full tw-flex"
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
            <div class="tw-flex tw-justify-end tw-mt-16">
              <AppButton
                title=" شروع تأیید هویت"
                variant="fill"
                textSize="baseWhite"
              />
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
  data() {
    return {
      activeValue: 'buy',
    }
  },
  methods: {
    valueVisible(key) {
      this.activeValue = key
    },
  },
}
</script>

<style lang="scss" scoped></style>
