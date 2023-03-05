<template>
  <div>
    <div class="tw-py-5">
      <TopHeaderButtons />
    </div>

    <HeaderSearch />

    <div class="tw-py-5"><CardMainButtons /></div>

    <CardLastVisit
      title="اپارتمان واقع در شریعتی"
      uploadDate="دو روز پیش در بابلسر "
      img="flower.jpg"
    />
    <ListPictureNote v-for="(item, i) in list" :key="i" v-bind="item" />

    <div class="tw-my-20"><ListAboveInformation /></div>
    <div class="text-information-list tw-text-gray-500">metrazh :</div>
    <div class="text-information-list tw-text-gray-700">10000 metr</div>

    <div class="tw-my-10">
      <ListSupportArticle
        question=" چگونه در دیوار آگهی ثبت کنم "
        title="چت دیوار"
      />
    </div>
    <div
      class="tw-my-8 tw-flex tw-flex-col tw-gap-6 tw-justify-center sm:tw-hidden"
    >
      <AppButton title="چت" type="transparent" />

      <AppInput
        title="کد ملی "
        description="لطفا کد ملی خود را وارد کنید"
        placeholder="nanan"
      >
        <template #append><PriceUnit title="تومان" /></template>
      </AppInput>

      <SearchInput>
        <template #closesvg> </template>
      </SearchInput>
    </div>
    <div class="">
      <img
        src="img/transporter.svg"
        alt=""
        class="tw-w-full tw-h-full tw-max-w-[20px] tw-max-h-5"
      />
    </div>
    <hr />
    <ListUserWebsite class="tw-flex tw-justify-center" />
    <ListInternalList class="tw-flex tw-justify-center tw-my-5" />

    <div class="tw-my-10"><ListBaseCategoryBranches /></div>
  </div>
</template>

<script>
export default {
  name: 'BasePage',
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
