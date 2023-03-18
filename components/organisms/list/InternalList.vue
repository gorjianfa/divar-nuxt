<template>
  <div>
    <div class="tw-py-8 tw-pl-4">
      <div class="">
        <div class="tw-w-full tw-max-w-[240px] tw-h-auto">
          <div class="tw-flex tw-flex-col">
            <div
              class="tw-w-full tw-max-w-[214px] tw-h-full tw-max-h-12 tw-my-2"
            >
              <div class="tw-py-2 tw-pr-4 tw-pl-2.5">
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
                    class="tw-text-xs tw-font-normal tw-whitespace-nowrap tw-text-gray-400 tw-pr-7 tw-mt-1"
                  >
                    {{ `تلفن ${phoneNumber}` }}
                  </div>
                </div>
              </div>
            </div>

            <div class="">
              <ListInternalAccess
                v-for="(item, i) in lists"
                :key="i"
                v-bind="item"
              />
            </div>

            <div class="tw-w-full tw-max-w-[240px]">
              <div class="tw-flex tw-flex-col">
                <div class="border-bottem border-top">
                  <ListInternalAccess
                    title="دیوار برای کسب‌وکارها"
                    img="store.svg"
                    to="/profile/for-business"
                  />
                </div>
                <div class="border-bottem">
                  <ListInternalAccess title="خروج " img="escape.svg" />
                </div>
              </div>
            </div>

            <CardShrinkFooter
              v-for="(item, i) in items"
              :key="i"
              v-bind="item"
            />
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
      lists: [
        {
          to: '/profile/identity',
          title: 'تأیید هویت',
          icon: 'identity',
        },
        { to: '/profile/my-post', title: 'آگهی‌های من', icon: 'mynotice' },
        { to: '/profile/bookmarks', title: 'نشان‌ها', icon: 'save' },
        {
          to: '/profile/transactions',
          title: 'امکان بیعانه',
          icon: 'deposit',
        },
        { to: '/profile/my-notes', title: 'یادداشت‌ها', icon: 'note' },
        {
          to: '/profile/recent-seen',
          title: 'بازدیدهای اخیر',
          icon: 'recentCheck',
        },
      ],
      items: [
        {
          features: [
            { access: 'درباره دیوار' },
            { access: 'دریافت برنامه' },
            { access: 'بلاگ دیوار' },
            { access: 'کسب وکار ها' },
            { access: 'پشتیبانی و قوانین' },
          ],
          svg: [
            { icon: 'twitter' },
            { icon: 'linkedin' },
            { icon: 'instagram' },

            { icon: 'film' },
          ],
          consent: [
            { picture: 'mojavez.png' },
            { picture: 'mojavez2.png' },
            { picture: 'mojavez3.png' },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
