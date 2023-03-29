<template>
  <div class="tw-container">
    <div class="tw-flex tw-mt-20">
      <ListBaseCategoryBranches />
      <div class="tw-grid tw-grid-cols-3 tw-w-full">
        <CardBaseCard v-for="(item, i) in list" :key="i" v-bind="item" />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  layout: 'base',
  data() {
    return {
      list: [
        {
          title: 'ویلا اجاره ای کنار دریا و جنگل رزرو ایام عید',
          price: 'از ۷۰۰,۰۰۰ ',
          timeOraddres: 'در بهنمیر',

          img: 'villa-1.jpg',
        },
        {
          title: ' جاده دریایی ویو دریا',
          price: '۴۶۰٬۰۰۰٬۰۰۰',
          timeOraddres: '۲ ساعت پیش',
          amountOfuse: 'اتاق2',
          img: 'villa-4.jpg',
        },
        {
          title: 'فروش آپارتمان',
          price: '۵٬۲۹۸٬۰۰۰٬۰۰۰',
          timeOraddres: '۱ ساعت پیش در بابلسر',
          amountOfuse: 'کلید نخورده',
          img: 'apartment.jpg',
        },
        {
          title: 'رزرو ویلااستخرمدرن تاپ لوکیشن شهرک صفاییه',
       
          timeOraddres: 'آژانس املاک ایوان',
          amountOfuse: 'اجاره روزانه',
          img: 'swiming.jpg',
        },
        {
          title: ' گیتار',
          price: ' 3/500/000',
          timeOraddres: '2روز پیش در ',
          amountOfuse: 'در حد نو',
          img: 'gitar-2.jpg',
        },
      ],
    }
  },
})
</script>
