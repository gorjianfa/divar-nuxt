<template>
  <div>
    <div class="">
      <div class="tw-flex tw-gap-2 tw-items-center tw-m-3">
        <AppButton
          v-for="(item, i) in lists"
          :key="i"
          v-bind="item"
          class="tw-w-full tw-max-w-[100px]"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          title: 'دیوارمن',
          prependIcon: 'user.svg',
          textSize: 'xSmall',
          variant: 'hover',
        },
        {
          title: 'پشتیبانی',
          textSize: 'xSmall',
          variant: 'hover',
        },
        {
          title: 'چت',
          prependIcon: 'chat.svg',
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
}
</script>

<style lang="scss" scoped></style>
