<template>
  <div>
    <div class="tw-flex tw-mt-20 tw-container">
      <div class=""><ListInternalList class="" /></div>

      <div class="tw-w-full tw-h-full tw-py-8 tw-px-4">
        <CenterDashboard
       v-if="show"
          img="notes.svg"
          description="برای یادداشت گذاشتن روی آگهی‌ها می‌توانید از دکمهٔ  در صفحهٔ آگهی استفاده کنید."
        />
      </div>
    </div>
  </div>
</template>

<script>
import CenterDashboard from '~/components/atoms/CenterDashboard.vue'
export default {
  components: { CenterDashboard },
  layout: 'dashboard',
   data(){
    return{
        show:true,
    }
   }
}
</script>

<style lang="scss" scoped></style>
