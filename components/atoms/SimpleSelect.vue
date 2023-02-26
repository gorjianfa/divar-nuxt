<template>
  <div>
    <div class="tw-w-full tw-h-full tw-max-w-[248px] tw-flex tw-bg-white">
      <div class="tw-py-5">
        <div class="tw-flex tw-gap-2 tw-items-center">
          <div class="">
            <!--down svg-->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#6b7280"
              class="tw-max-w-[16px] tw-max-h-4 tw-w-full tw-h-full tw-flex tw-stroke-gray-800"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div class="tw-font-medium tw-text-xs tw-text-gray-900">{{ value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
