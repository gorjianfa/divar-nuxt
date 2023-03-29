<template>
  <div>
    <div class="">
      <div class="tw-max-w-[135px] tw-max-h-14 tw-w-full tw-h-full">
        <div class="tw-flex tw-flex-col tw-items-center tw-px-12">
          <div class="base-text-xs tw-mb-1">{{ title }}</div>
          <div class="support-text-xl">{{ explanation }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'رنگ',
    },
    explanation: {
      type: String,
      default: 'مشکی',
    },
  },
}
</script>

<style lang="scss" scoped></style>
