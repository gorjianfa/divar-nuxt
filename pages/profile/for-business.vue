<template>
  <div>
    <div class="tw-flex tw-mt-20 tw-container">
      <div class=""><ListInternalList class="" /></div>

      <div class="tw-w-full tw-h-full tw-py-8 tw-px-4 tw-mr-72">
        <div
          class="tw-flex tw-flex-col tw-items-center tw-w-full tw-max-w-[514px]"
        >
          <h3 class="tw-font-normal tw-text-base tw-text-gray-700">
            با ثبت کسب‌وکار خود در دیوار از طرح‌های ویژه و امکانات حرفه‌ای دیوار
            برای کسب‌و‌کارها بهره‌مند شوید.
          </h3>
          <CardBusinessItem v-for="(item, i) in list" :key="i" v-bind="item" />
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
      list: [
        {
          href: 'http://sell.divar.ir',
          title: 'فروشگاه شما در دیوار',
          description: 'فعالیت حرفه‌ای در بازار آنلاین',
          img: 'shopping.svg',
        },
        {
          href: 'https://divar.ir/my-divar/for-business/real-estate-invitations',
          title: 'آژانس املاک شما در دیوار',
          description: 'امکانات تخصصی برای مدیران و مشاوران',
          img: 'real-state.svg',
        },
        {
          href: 'https://divar.ir/my-divar/for-business/dealership-invitations',
          title: 'نمایشگاه اتومبیل شما در دیوار',
          description: 'فعالیت حرفه‌ای در بازار آنلاین خودرو',
          img: 'car.svg',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
