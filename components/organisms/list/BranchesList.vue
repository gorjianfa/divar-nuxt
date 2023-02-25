<template>
  <div>
    <div class="">
      <CategoryBranches v-for="(item, i) in lists" :key="i" v-bind="item" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          title: 'فروش مسکونی',
          features: [
            { option: 'خانه کلنگی' },
            { option: 'اپارتمان تجاری' },
            { option: 'اپارتمان مسکونی' },
            { option: 'ویلا' },
          ],
        },
          {
          title: 'اجاره مسکونی',
          features: [
            { option: 'اپارتمان' },
            { option: 'ویلا' },
            { option: 'خانه کلنگی' },
            { option: 'اپارتمان و ویلا' },
          ],
        },
          {
          title: 'اجاره کوتاه مدت',
          features: [
            { option: 'ویلا' },
            { option: 'ویلا باغ' },
            { option: 'سوییت' },
            { option: 'اپارتمان' },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
