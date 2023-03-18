<template>
  <div>
     <div class="tw-flex tw-mt-20 tw-container">
      <div class=""><ListInternalList class="" /></div>

      <div class="tw-w-full tw-h-full tw-py-8 tw-px-4">
      <CenterDashboard   :button="true"    v-if="show"   />
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
