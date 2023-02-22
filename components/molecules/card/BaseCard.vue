<template>
  <div>
    <div class="tw-p-2 tw-w-full tw-h-full tw-max-w-[380px] tw-max-h-[184px]">
      <a href="#" class="tw-no-underline">
        <article
          class="tw-p-4 tw-flex tw-cursor-pointer tw-rounded-md tw-border-[1px] tw-border-solid tw-border-gray-200 tw-bg-white"
        >
          <div class="tw-flex tw-flex-col tw-w-full tw-max-w-[141.66px]">
            <div class="tw-mb-8">
              <span
                class="tw-font-medium tw-text-base tw-text-black tw-overflow-hidden"
                >{{ title }}</span
              >
            </div>
            <div class="">
              <span class="base-text-sm tw-pl-5"> تومان {{ price }}</span>
            </div>
            <div class="">
              <span class="base-text-xs">{{ timeOraddres }}</span>
            </div>
          </div>
          <!--chat svg-->
          <div class="tw-flex tw-flex-col tw-justify-end">
            <div class="tw-flex"></div>
          </div>

          <div class="">
            <img
              :src="'img/' + img"
              alt=""
              class="tw-flex tw-w-full tw-h-full tw-max-w-[136px] tw-max-h-[136px] tw-rounded-md"
            />
          </div>
        </article>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    price: {
      type: String,
      default: '',
    },
    timeOraddres: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
