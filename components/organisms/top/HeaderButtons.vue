<template>
  <div>
    <div class="">
      <div class="tw-flex tw-items-center">
        <OnClickOutside @trigger="hideCard">
          <div class="tw-flex tw-flex-col">
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
</template>

<script>
import { OnClickOutside } from '@vueuse/components'

export default {
  components: { OnClickOutside },
  data() {
    return {
      showList: false,
      lists: [
        {
          title: 'پشتیبانی',
          textSize: 'xSmall',
          variant: 'hover',
          to: '/support-users',
        },
        {
          title: 'چت',
          prependIcon: 'chat',
          variant: 'hover',
          textSize: 'xSmall',
          href: '/dfghjk',
        },
        {
          title: 'ثبت اگهی',
          textSize: 'small',
          variant: 'default',
          to: '/test',
        },
      ],
    }
  },
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
