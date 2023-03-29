<template>
  <div>
    <div class="tw-w-full tw-py-8 tw-h-auto">
      <div class="tw-flex tw-items-center tw-gap-2 tw-whitespace-nowrap">
        <div
          class="tw-flex tw-items-center tw-gap-1 tw-group tw-cursor-pointer"
          v-for="item in items"
          :key="item.id"
        >
          <span
            class="tw-font-normal tw-text-xs tw-text-gray-500 group-hover:tw-text-gray-800"
            >{{ item.category }}</span
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            class="tw-w-full tw-h-full tw-max-h-4 tw-max-w-[16px] tw-flex tw-stroke-gray-500 group-hover:tw-stroke-gray-800 group-hover:tw-rotate-180 tw-duration-500 tw-transition-transform"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div class="tw-cursor-text">
          <span class="base-text-xs tw-whitespace-nowrap">{{ title }}</span>
        </div>
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
  },

  data() {
    return {
      items: [
        {
          id: '1',
          category: 'املاک',
        },
        {
          id: '2',
          category: 'فروش مسکونی',
        },
        {
          id: '3',
          category: 'خانه و ویلا',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
