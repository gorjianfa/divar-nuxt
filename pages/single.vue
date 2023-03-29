<template>
  <div>
    <div class="tw-container tw-my-16">
      <RouterItem
        title="نما شیشه بدون مشرف 350متر +استخردار/نزدیک جاده"
        class="tw-mr-36"
      />

      <div class="tw-flex tw-justify-center">
        <div class="">
          <ListTitleInformation
            title="نما شیشه بدون مشرف 350متر +استخردار/نزدیک جاده"
            loadingTime="۱ روز پیش در بابلسر"
          />
          <CardMainButtons />
          <div class="tw-flex tw-items-center tw-py-4 border-bottem">
            <ListAboveInformation title="متراژ" explanation="250" />
            <ListAboveInformation
              title="ساخت"
              explanation="1401"
              class="tw-border-x tw-border-solid tw-border-x-gray-300 tw-border-0"
            />
            <ListAboveInformation title="اتاق" explanation="3" />
          </div>
          <ListItemsInformation
            v-for="(item, i) in list"
            :key="i"
            v-bind="item"
          />

          <ListAttributes v-for="(item, i) in items" :key="i" v-bind="item" />
          <!--description-->
          <div class="">
            <p class="text-attrebutes">توضیحات</p>
            <div
              class="tw-flex tw-flex-col"
              v-for="item in description"
              :key="item.id"
            >
              <li
                class="tw-list-none tw-text-lg tw-text-gray-700 tw-font-light tw-mb-3"
              >
                {{ item.option }}
              </li>
            </div>
          </div>
          <AppButton
            title="خانه ویلا"
            variant="secondHover"
            textSize="xSmall"
            class=""
          />
        </div>
        <div class="">
          <ListPictureNote />
        </div>
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
          rightTitle: 'متراژ زمین',
          leftTitle: '۳۷۰',
        },
        {
          rightTitle: 'نوع ملک',
          leftTitle: 'ویلای جنگلی',
        },
        {
          rightTitle: 'قیمت کل',
          leftTitle: '۷۰۰٬۰۰۰٬۰۰۰ تومان',
        },
        {
          rightTitle: 'قیمت هر متر',
          leftTitle: '۱٬۸۹۱٬۰۰۰ تومان',
        },
        {
          rightTitle: 'آگهی‌دهنده',
          leftTitle: 'مشاور املاک',
        },
        {
          rightTitle: 'سند',
          leftTitle: 'تک‌ برگ',
        },
      ],
      items: [
        {
          features: [
            { icon: 'car', title: 'پارکینگ' },
            { icon: 'warehouse', title: 'انباری' },
            { icon: 'balcony', title: 'بالکن' },
          ],
        },
      ],
      description: [
        { option: 'بیلیارد' },
        { option: 'جای پارک دو خودرو' },
        { option: 'فاصله ۱۰۰,متری از ساحل' },
        { option: 'دسترسی آسان به امکانات ،بیمارستان،مدرسه' },
        { option: 'منطقه تهرانی نشین' },
        { option: 'سند تک برگ و مدارک کامل' },
        { option: 'نوساز و کلید نخورده با بهترین متریال' },
        { option: ' معاوضه با ملک و خودرو' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
