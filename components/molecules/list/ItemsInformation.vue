<template>
  <div>
    <div class="tw-w-full tw-max-w-[404px] tw-h-auto">
      <div class="border-bottem">
        <div class="tw-py-3 tw-flex tw-justify-between tw-items-center">
          <div class="text-information-list tw-text-gray-600">
            {{ rightTitle }}
          </div>
          <div class="text-information-list tw-text-gray-700">
            {{ leftTitle }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rightTitle: {
      type: String,
      default: '',
    },
    leftTitle: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
