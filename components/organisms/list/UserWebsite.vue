<template>
  <div>
    <div class="">
      <div
        class="tw-h-auto tw-w-full tw-min-w-[243px] tw-bg-white tw-rounded tw-shadow"
      >
        <div class="tw-flex tw-flex-col">
          <div class="tw-pr-4 tw-pl-2.5 tw-py-5">
            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-items-center tw-gap-2">
                <div class="">
                  <!--user svg -->

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#6b7280"
                    class="tw-w-full tw-h-full tw-flex tw-max-w-[16px] tw-max-h-[16px]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <div class="base-text-xs">کاربر دیوار</div>
              </div>
              <div
                class="tw-text-xs tw-font-normal tw-whitespace-nowrap tw-text-gray-400 tw-pr-6 tw-mt-1"
              >
                {{ `تلفن ${phoneNumber}` }}
              </div>
            </div>
          </div>

          <div class="">
            <ListUserAccess v-for="(item, i) in items" :key="i" v-bind="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    phoneNumber: {
      type: String,
      default: '09904216609',
    },
  },
  data() {
    return {
      items: [
        {
          item: 'تایید هویت',
          img: 'identity.svg',
        },
        {
          item: 'اگهی های من',
          img: 'mynotice.svg',
        },
        {
          item: 'نشان ها',
          img: 'save.svg',
        },
        {
          item: 'یادداشت ها',
          img: 'note.svg',
        },
        {
          item: 'بیعانه',
          img: 'deposit.svg',
        },
        {
          item: 'بازدیدهای اخیر',
          img: 'recentCheck.svg',
        },
        {
          item: 'دیوار برای کسب و کارها',
          img: 'store.svg',
        },
        {
          item: 'خروج',
          img: 'escape.svg',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
