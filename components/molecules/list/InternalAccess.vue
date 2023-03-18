<template>
  <div>
    <div class="tw-w-full tw-max-w-[208px] tw-h-12">
      <div class="tw-px-4 tw-py-2">
        <nuxt-link :to="to" class="tw-no-underline">
          <div class="tw-flex tw-gap-2 tw-cursor-pointer tw-group">
            <div class="">
              <Component
                :is="icon"
                class="tw-w-full tw-max-w-[20px] tw-max-h-5 tw-flex tw-stroke-gray-500 group-hover:tw-stroke-gray-900"
              />
            </div>
            <div class="">
              <span
                class="tw-text-sm tw-font-normal tw-text-gray-500 group-hover:tw-text-gray-900"
                >{{ title }}</span
              >
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
  props: {
    icon: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: 'تأیید هویت',
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
