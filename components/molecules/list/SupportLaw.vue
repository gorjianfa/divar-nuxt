<template>
  <div>
    <div class="tw-w-full tw-h-auto tw-max-w-[390px] tw-mt-4 tw-px-2">
      <div class="tw-flex tw-flex-col tw-ml-4">
        <span class="tw-font-medium tw-text-base tw-text-gray-700 tw-mb-1">{{ title }}</span>
        <span class="tw-font-normal tw-text-sm tw-text-gray-500 tw-mb-3 ">{{ description }}</span>
        <a :href="href" class="tw-no-underline  tw-font-medium tw-text-sm tw-text-red-700">{{ endTitle }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
    endTitle: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
