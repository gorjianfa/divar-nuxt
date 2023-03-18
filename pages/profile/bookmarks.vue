<template>
  <div>
    <div class="tw-flex tw-mt-20 tw-container">
      <div class=""><ListInternalList class="" /></div>

      <div class="tw-w-full tw-h-full tw-py-8 tw-px-4">
        <CardSavePost />

        <CenterDashboard
          v-if="show"
          img="save-paper.svg"
          description=" برای نشان‌کردن آگهی‌ها از دکمهٔ  در صفحهٔ آگهی استفاده کنید."
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
      show: true,
    }
  },
}
</script>

<style lang="scss" scoped></style>
