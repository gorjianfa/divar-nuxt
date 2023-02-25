<template>
  <div>
    <div class="">
      <ListSupportArticle v-for="(item, i) in lists" :key="i" v-bind="item" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          title: 'ورود و حساب کاربری',
          img: 'login-accont.png',
          features: [
            { question: 'چگونه در «دیوار» حساب کاربری بسازم' },
            { question: 'چگونه اپلیکیشن دیوار را دانلود کنم' },
            { question: 'آیا برای ثبت آگهی باید حساب کاربری بسازم' },
            { question: 'چگونه وارد حساب خود شوم' },
          ],
        },
        {
          title: 'ثبت و مدیریت آگهی',
          img: 'save-advertising.png',
          features: [
            { question: 'شرایط ثبت آگهی در دیوار' },
            { question: 'چگونه در دیوار آگهی ثبت کنم' },
            { question: 'دسته‌بندی‌های اصلی دیوار کدامند' },
            { question: 'آیا برای ثبت آگهی باید حساب کاربری بسازم' },
          ],
        },
        {
          title: 'پرداخت و موارد مالی',
          img: 'payment.png',
          features: [
            { question: 'آیا ثبت آگهی در دیوار هزینه دارد' },
            { question: 'چرا آگهی من به خاطر دسته‌بندی غیرمرتبط رد شده است' },
            { question: 'چرا آگهی من منتشر نشده است' },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
