<template>
  <div class="tw-flex tw-flex-col tw-mt-16">
    <ListBranchesList />
    <ListSupportSugestion />

    <div class="tw-my-10">
      <ListSupportArticle
        question=" چگونه در دیوار آگهی ثبت کنم "
        title="چت دیوار"
      />
    </div>
    <div
      class="tw-my-8 tw-flex tw-flex-col tw-gap-6 tw-justify-center sm:tw-hidden"
    >
      <AppInput
        title="کد ملی "
        description="لطفا کد ملی خود را وارد کنید"
        placeholder="nanan"
      >
        <template #append><PriceUnit title="تومان" /></template>
      </AppInput>
    </div>

    <div class="tw-flex tw-flex-col tw-gap-2 tw-m-10">
      <ListSupportQuestion />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasePage',
  layout: 'dashboard',
  data() {
    return {
      list: [
        {
          picture: [
            { img: 'bathroom.jpg' },
            { img: 'bedroom.jpg' },
            { img: 'kitchen.jpg' },
          ],
        },
      ],
    }
  },
}
</script>
