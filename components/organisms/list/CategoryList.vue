<template>
  <div>
    <div class="tw-py-1">
      <div class="tw-w-full tw-h-full tw-max-w-[160px]">
        <div class="tw-flex tw-flex-col tw-gap-2.5">
          <div
            class="tw-group tw-mb-2 tw-w-full tw-h-full tw-max-w-[160px] tw-max-h-8 tw-bg-white tw-rounded tw-border tw-border-solid tw-border-gray-300"
          >
            <div
              class="tw-px-2 tw-py-2 group-hover:tw-bg-gray-100 tw-cursor-pointer"
            >
              <div class="tw-flex tw-items-center tw-gap-1">
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="tw-stroke-slate-500 tw-flex tw-w-full tw-h-full tw-max-h-4 tw-max-w-[16px]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
                <div class="base-text-xs">همه اگهی ها</div>
              </div>
            </div>
          </div>

          <div class="tw-flex tw-flex-col tw-gap-3">
            <CardCategoryItem 
              v-for="(item, i) in list"
              :key="i"
              v-bind="item"
            />
          </div>
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
          img: 'house.svg',
          title: 'املاک',
        },
        {
          img: 'transporter.svg',
          title: 'وسایل نقلیه',
        },
        {
          img: 'digitaly.svg',
          title: 'کالای دیجیتال',
        },
        {
          img: 'kitchen.svg',
          title: 'خانه و اشپزخانه',
        },
        {
          img: 'services.svg',
          title: 'خدمات',
        },
        {
          img: 'privateDevice.svg',
          title: 'وسایل شخصی',
        },
        {
          img: 'game.svg',
          title: 'سرگرمی و فراغت',
        },
        {
          img: 'public.svg',
          title: 'اجتماعی',
        },
        {
          img: 'industrial.svg',
          title: 'تجهیزات و صنعتی',
        },
        {
          img: 'employ.svg',
          title: 'استخدام و کاریابی',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
