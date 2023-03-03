<template>
  <div>
    <div class="tw-w-full tw-h-10 tw-p-5">
      <div class="">
        <div class="tw-flex tw-gap-4">
          <AppButton v-for="(item, i) in lists" :key="i" v-bind="item" />
        </div>
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
          apendIcon: 'chat.svg',
          variant: 'hover',
          textSize: 'xSmall',
        },
        {
          title: 'ثبت اگهی',
          textSize: 'small',
          variant: 'default',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
