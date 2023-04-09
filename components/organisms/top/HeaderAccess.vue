<template>
  <div class="tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-z-10">
    <div class="tw-w-full tw-h-16 tw-bg-white tw-shadow-md">
      <div class="tw-flex tw-items-center tw-justify-center">
        <div class="tw-px-2 tw-py-2">
          <div class="tw-flex tw-items-center tw-gap-2">
            <div class="tw-px-2">
              <img
                :src="require('@/assets/img/logo.svg')"
                alt=""
                class="tw-w-[48px] tw-h-[48px] tw-flex tw-pl-2"
              />
            </div>

            <OnClickOutside @trigger="OnClickOutside">
              <AppButton
                @click="OnClickOutside('location')"
                prependIcon="location"
                title=" بابلسر"
                variant="hover"
                textSize="xSmall"
                class="border-right tw-mr-2 tw-pr-2"
              />

              <div
                class="tw-fixed tw-top-0 tw-right-80"
                v-if="showList === 'location'"
              >
                <CardSelectLocation />
              </div>
            </OnClickOutside>

            <OnClickOutside @trigger="OnClickOutside">
              <AppButton
                @click="OnClickOutside('category')"
                apendIcon="downArrow"
                class=""
                title="دسته ها"
                variant="hover"
                textSize="xSmall"
              />

              <div class="tw-fixed tw-mt-1" v-if="showList === 'category'">
                <ListCategoryTitle />
              </div>
            </OnClickOutside>

            <HeaderSearch class="tw-w-full tw-min-w-[480px] tw-px-2 tw-mb-2" />

            <TopHeaderButtons class="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { OnClickOutside } from '@vueuse/components'

export default {
  data() {
    return {
      showList: 'navigation',
    }
  },
  components: { OnClickOutside },

  methods: {
    OnClickOutside(key) {
      this.showList = key
    },
    hideCard() {
      this.showList = null
    },
  },
}
</script>

<style lang="scss" scoped></style>
