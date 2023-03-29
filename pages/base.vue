<template>
  <div class="tw-flex tw-flex-col">
    <div class="">
      <FormPriceFluctuation class="tw-mt-24" />
      <div class="tw-flex tw-flex-col">
        <AppButton
          title="دیوارمن"
          prependIcon="user"
          textSize="xSmall"
          variant="hover"
        />
      </div>
      <CardSelectLocation class="tw-mt-20" />
    </div>

    <SimpleSelect value="قیمت" />
    <div class="">
      <ListUserWebsite />
    </div>
    <div class="tw-cursor-pointer tw-p-1">
      <!--close svg-->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        class="tw-w-full tw-max-w-[16px] tw-h-4 tw-stroke-red-600 tw-flex hover:tw-rounded-full hover:tw-bg-red-100"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.4138 12.0003L16.2428 9.17134C16.6338 8.78134 16.6338 8.14834 16.2428 7.75734C15.8518 7.36734 15.2198 7.36734 14.8288 7.75734L11.9998 10.5863L9.1718 7.75734C8.7808 7.36734 8.1478 7.36734 7.7578 7.75734C7.3668 8.14834 7.3668 8.78134 7.7578 9.17134L10.5858 12.0003L7.7578 14.8293C7.3668 15.2193 7.3668 15.8523 7.7578 16.2433C7.9528 16.4383 8.2088 16.5363 8.4648 16.5363C8.7208 16.5363 8.9768 16.4383 9.1718 16.2433L11.9998 13.4143L14.8288 16.2433C15.0238 16.4383 15.2798 16.5363 15.5358 16.5363C15.7918 16.5363 16.0478 16.4383 16.2428 16.2433C16.6338 15.8523 16.6338 15.2193 16.2428 14.8293L13.4138 12.0003Z"
        ></path>
      </svg>
    </div>
    <SimpleCheckbox />

    <div class="tw-py-5"><CardSavePost /></div>

    <div class="tw-my-5">
      <CardBusinessItem />
    </div>
    <ListSupportSugestion />

    <div class="">
      <button
        class="tw-w-full tw-bg-rose-100 tw-max-w-[100px] tw-px-4 tw-h-full tw-max-h-[40px]"
      >
        <span class="tw-font-medium tw-text-base tw-text-gray-600"
          >nothing</span
        >
      </button>
    </div>
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

    <hr />
    <ListUserWebsite class="tw-flex tw-justify-center" />
    <ListInternalList class="tw-flex tw-justify-center tw-my-5" />

    <div class="tw-my-10">
      <ListBaseCategoryBranches />
    </div>
    <div class="tw-flex tw-flex-col tw-gap-2 tw-m-10">
      <CardBaseCard
        title="zamin keshavarzi"
        price="50000000"
        timeOraddres="2day a go"
        amountOfuse="new"
        img="farm.jpg"
      /><CardLastVisit />
      <ListPictureNote />

      <ListSupportQuestion />

      <ListBranchesList />

      <div class="md:tw-hidden tw-flex tw-flex-col tw-gap-2">
        <div class="tw-text-base tw-text-blue-500">lololo</div>
        <div class="support-text-sm-hover">index page</div>
        <div class="support-text-sm-hover">nothig</div>
        <p class="support-text-sm-hover">kilogeram</p>

        <div class="tw-text-base tw-font-normal tw-text-gray-800">
          حساب کاربری
        </div>
        <div class="tw-text-5xl tw-font-bold tw-text-gray-500">index page</div>
        <div class="tw-text-5xl tw-font-bold tw-text-gray-600">index page</div>
        <div class="tw-text-5xl tw-font-bold tw-text-gray-700">index page</div>
        <div class="grouping-red-hover tw-text-gray-400">فروش مسکونی</div>
        <div class="grouping-red-hover tw-text-gray-800">فروش مسکونی</div>
        <div class="tw-text-xl tw-font-medium tw-text-gray-800">
          ورود و حساب کاربری
        </div>

        <div class="tw-text-xl tw-font-medium tw-text-gray-800">ورود و</div>
      </div>
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
