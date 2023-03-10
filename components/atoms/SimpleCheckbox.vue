<template>
  <div class="border-bottem tw-w-full tw-h-12 tw-max-w-[412px]">
    <div class="tw-py-2">
      <div class="tw-flex tw-items-center tw-justify-between tw-cursor-pointer">
        <div class="tw-font-normal tw-text-xl tw-text-gray-800">{{ city }}</div>
        <div
          class="tw-bg-white hover:tw-bg-red-50 hover:tw-rounded-full tw-pr-1.5 tw-pt-1.5 tw-pl-3 tw-pb-3 tw-w-5 tw-h-5"
        >
          <input
            type="checkbox"
            name=""
            id=""
            class="tw-accent-red-700 tw-w-5 tw-h-5 tw-cursor-pointer tw-flex"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: String,
      default: 'babolsar',
    },
  },
}
</script>

<style lang="scss" scoped></style>
