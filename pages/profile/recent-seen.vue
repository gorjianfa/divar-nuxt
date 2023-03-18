<template>
  <div class="">
    <div class="tw-flex tw-mt-20 tw-container">
      <div class=""><ListInternalList class="" /></div>

      <div
        class="tw-grid tw-grid-cols-3 tw-gap-4 tw-w-full tw-h-full tw-py-8 tw-pr-4"
      >
        <CardLastVisit
          v-for="(item, i) in list"
          :key="i"
          v-bind="item"
          class=" "
        />

        <CenterDashboard
          v-if="show"
          description="  اخیراً از هیچ آگهی‌ای بازدید نکرده‌اید."
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      show: false,
      list: [
        {
          title: 'گوسفند ماده ',
          uploadDate: 'یک روز پیش',
          img: 'sheep.jpg',
        },
        {
          title: 'برج اداری در شریعتی',
          uploadDate: 'سه روز پیش',
          img: 'tower.jpg',
        },
        {
          title: 'ویلا لواسان ',
          uploadDate: 'یک رب پیش',
          img: 'villa.jpg',
        },
        {
          title: 'کاکتوس رنگی',
          uploadDate: 'یک ساعت پیش',
          img: 'kaktoos.png',
        },
        {
          title: 'شکوفه',
          uploadDate: 'سه روز پیش',
          img: 'flower.jpg',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
