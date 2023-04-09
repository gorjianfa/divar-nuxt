<template>
  <div>
    <div class="tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-z-10">
      <div class="tw-w-full tw-h-16 tw-bg-white tw-shadow-md">
        <div class="tw-flex tw-w-full tw-items-center tw-px-2 tw-py-2">
          <div
            class="tw-flex tw-items-center tw-w-full tw-justify-between tw-container"
          >
            <div class="tw-px-2">
              <img
                :src="require('@/assets/img/logo.svg')"
                alt=""
                class="tw-w-[48px] tw-h-[48px] tw-flex tw-pl-2"
              />
            </div>

            <div class="tw-flex tw-items-center">
              <OnClickOutside @trigger="hideCard">
                <div class="tw-flex tw-flex-col ">
                  <AppButton
                    @click="OnClickOutside"
                    title="دیوارمن"
                    prepend-icon="user"
                    text-size="xSmall"
                    variant="hover"
                  />
                  <div class="tw-fixed">
                    <ListUserWebsite v-if="showList" />
                  </div></div
              ></OnClickOutside>
              <div class="tw-flex tw-items-center">
                <AppButton
                  v-for="(item, i) in lists"
                  :key="i"
                  v-bind="item"
                  class=" "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Nuxt />

    <CardSteretchFooter v-for="(item, i) in items" :key="i" v-bind="item" />
  </div>
</template>

<script>
import { OnClickOutside } from '@vueuse/components'

export default {
  data() {
    return {
      showList: false,
      items: [
        {
          features: [
            { access: 'دربارۀ دیوار' },
            { access: 'دریافت برنامه' },
            { access: 'بلاگ دیوار' },
            { access: 'پشتیبانی و قوانین' },
            { access: 'تماس با پشتیبانی' },
          ],
          svg: [
            { img: 'twitter.svg' },
            { img: 'linkedin.svg' },
            { img: 'instagram.svg' },

            { img: 'film.svg' },
          ],
        },
      ],

      lists: [
        {
          title: 'پشتیبانی',
          textSize: 'xSmall',
          variant: 'hover',
          to: '/support-users',
        },
        {
          title: 'چت',
          prependIcon: 'chat.svg',
          variant: 'hover',
          textSize: 'xSmall',
          to: '/base',
        },
      ],
    }
  },
  components: { OnClickOutside },

  methods: {
    OnClickOutside() {
      this.showList = !this.showList
    },
    hideCard() {
      this.showList = null
    },
  },
}
</script>

<style lang="scss" scoped></style>
