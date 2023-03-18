<template>
  <div class="tw-group">
    <div
      class="tw-w-full tw-h-full tw-max-h-[48px] tw-max-w-[210px] tw-bg-white tw-px-4 group-hover:tw-bg-gray-100"
    >
      <div class="border-top tw-cursor-pointer">
        <nuxt-link :to="to" class="tw-no-underline">
          <div class="tw-flex tw-flex-col tw-mt-2">
            <div class="tw-flex tw-gap-2 tw-py-1 tw-items-center">
           
                
                <Component
                  :is="icon"
                  class="tw-w-full tw-max-w-[16px] tw-max-h-4 tw-flex tw-stroke-gray-500 group-hover:tw-stroke-gray-900"
                />
           
              <div class="">
                <span class="base-text-sm group-hover:tw-text-gray-900">{{
                  item
                }}</span>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import identity from '~/assets/img/identity.svg?inline'
import mynotice from '~/assets/img/mynotice.svg?inline'
import save from '~/assets/img/save.svg?inline'
import note from '~/assets/img/note.svg?inline'
import deposit from '~/assets/img/deposit.svg?inline'
import RecentCheck from '~/assets/img/recentCheck.svg?inline'
import store from '~/assets/img/store.svg?inline'
import escape from '~/assets/img/escape.svg?inline'
export default {
  name: 'ListUserAccess',
  props: {
    item: {
      type: String,
      default: 'اگهی های من',
    },
    icon: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: '#',
    },
  },
  components: {
    identity,
    mynotice,
    save,
    note,
    deposit,
    RecentCheck,
    store,
    escape,
  },
}
</script>

<style lang="scss" scoped></style>
