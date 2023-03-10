<template>
  <div>
    <div class="tw-w-full tw-max-w-[412px] tw-h-12 border-bottem">
      <div class="tw-py-2">
        <div
          class="tw-flex tw-justify-between tw-items-center tw-cursor-pointer"
        >
          <div class="tw-font-normal tw-text-gray-800 tw-text-xl">
            {{ state }}
          </div>
          <div class="">
            <!--left arrow svg-->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="tw-flex tw-w-full tw-stroke-gray-500 tw-max-w-[20px] tw-h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    state: {
      type: String,
      default: 'مازندران',
    },
  },
}
</script>

<style lang="scss" scoped></style>
