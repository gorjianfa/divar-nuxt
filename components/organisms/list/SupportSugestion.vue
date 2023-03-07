<template>
  <div class="tw-container">
    <div class="border-top tw-my-4">
      <div class=" tw-flex tw-items-center tw-gap-2.5">
        <ListSupportLaw v-for="(item, i) in list" :key="i" v-bind="item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: 'شرایط و قوانین کلی استفاده از دیوار',
          description: 'دریافت خدمات از سایت و اپلیکیشن دیوار در گرو رعایت شرایط و قوانین دیوار است. لطفاً پیش از استفاده از خدمات دیوار، شرایط و قوانین را به صورت کامل و با دقت مطالعه کنید.',
          href: '',
          endTitle: 'مشاهدهٔ شرایط و قوانین',
        },
        {
          title: 'راهنمای خرید امن',
          description: 'مطالعهٔ راهنمای خرید امن قبل و هنگام معامله احتمال کلاهبرداری را کاهش می‌دهد. لطفا پیش از انجام هرگونه خرید و فروش، راهنمای خرید امن را با دقت مطالعه کنید',
          href: '',
          endTitle: 'مشاهدهٔ راهنمای خرید امن',
        },
        {
          title: 'انتقادات و پیشنهادات',
          description: 'به منظور بهبود تجربهٔ کاربری و خدمات دیوار و همچنین افزایش رضایت کاربران، خوشحال می‌شویم با ارسال انتقادات و پیشنهادهای خود، ما را در بهبود کیفیت ارائهٔ خدمات یاری نمائید',
          href: '',
          endTitle: 'ثبت انتقاد و پیشنهاد',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
