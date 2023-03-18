<template>
  <div>
    <div class="tw-flex tw-flex-col tw-items-center">
      <img
        :src="require('@/assets/img/' + img)"
        alt=""
        class="tw-w-full tw-h-full tw-flex tw-max-w-[200px] tw-max-h-[200px]"
      />
      <span
        class="tw-mb-4 tw-mt-2 base-text-xs tw-max-w-[232px] tw-w-full tw-text-center"
        >{{ description }}</span
      >
      <div class="" v-if="button">
        <AppButton title="ثبت آگهی" variant="default" textSize="small" to="/" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    button: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: 'در حال حاضر آگهی ثبت‌شده ندارید',
    },
    img: {
      type: String,
      default: 'paper.svg',
    },
  },
}
</script>

<style lang="scss" scoped></style>
