<template>
  <div class="tw-container">
    <div class="tw-grid tw-grid-cols-3">
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
          title: 'بررسی و رد آگهی',
          img: 'check-advertising.png',
          features: [
            { question: 'چرا آگهی من به خاطر دسته‌بندی غیرمرتبط رد شده است؟' },
            { question: 'چطور از علت حذف یا رد آگهی خود باخبر شوم؟' },
            { question: 'چرا آگهی من از روی دیوار حذف شده است؟' },
            { question: 'پرتکرارترین دلایل رد عکس آگهی کدامند؟' },
            { question: 'چرا آگهی من از روی دیوار حذف شده است؟' },
          ],
        },
        {
          title: 'نمایش و جستجوی آگهی',
          img: 'show-search.png',
          features: [
            { question: 'چگونه آگهی مورد نظر خود را در دیوار پیدا کنم؟' },
            { question: 'صفحهٔ نمایش آگهی چه امکاناتی دارد؟' },
            { question: 'چرا اطلاعات تماس برای من نمایش داده نمی‌شود؟' },

            { question: 'چطور آگهی‌‌های ثبت‌شده در شهر دیگر را پیدا کنم؟' },
          ],
        },
        {
          title: 'چت دیوار',
          img: 'chat.png',
          features: [
            { question: 'چت دیوار چیست؟' },
            { question: 'قوانین استفاده از چت دیوار' },
            { question: 'پستچی دیوار چیست؟' },
            { question: 'چرا چت دیوار من مسدود شده است؟' },
            { question: 'چطور تنظیمات چت و نوتیفیکیشن را تغییر دهم؟' },
          ],
        },
        {
          title: 'پرداخت و موارد مالی',
          img: 'payment.png',
          features: [
            { question: '? آیا ثبت آگهی در دیوار هزینه دارد' },
            { question: ' ? چرا آگهی من به خاطر دسته‌بندی غیرمرتبط رد شده است' },
            { question: ' ? چرا آگهی من منتشر نشده است' },
            { question: 'پرتکرارترین دلایل رد عکس آگهی کدامند؟'  },
            { question: 'چرا وضعیت آگهی من «در انتظار پرداخت» است؟'  },
          
          ],
        },

        {
          title: 'تخلفات و گزارش ها',
          img: 'reporting.png',
          features: [
            {
              question:
                'فیشینگ (کلاهبرداری آنلاین از طریق درگاه بانکی غیر واقعی) چیست؟',
            },
            {
              question: 'در صورت ایجاد مزاحمت در کانال‌های ارتباطی چه‌کار کنم؟',
            },
            { question: 'چگونه مشکل یک آگهی را گزارش کنم؟' },
            {
              question:
                'در صورت دریافت درخواست مشکوک به کلاهبرداری چه کار کنم؟',
            },
            { question: 'چطور شکایت خود را ثبت کنم؟' },
          ],
        },
        {
          title: 'دیوار کسب و کارها',
          img: 'business.png',
          features: [
            { question: 'فروشگاه شما در دیوار' },
            { question: 'نمایشگاه خودرو شما در دیوار' },
            { question: 'سرویس استخدام شما در دیوار' },
            { question: 'پروفایل خدمات شما در دیوار' },
            { question: 'آژانس املاک شما در دیوار' },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
