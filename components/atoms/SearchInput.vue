<template>
  <div>
    <div class="tw-flex tw-flex-col tw-items-center">
      <span
        class="tw-text-black tw-font-medium tw-text-xl tw-my-4 tw-pb-4 tw-pt-6"
        >چطور می‌توانیم کمکتان کنیم؟
      </span>

      <div
        class="tw-cursor-text tw-w-full tw-max-w-[568px] tw-h-10 tw-ring-1 tw-ring-gray-300 hover:tw-ring-gray-500 tw-rounded-md focus:tw-ring-red-800 focus-within:tw-ring-red-800 focus:tw-ring-opacity-50 focus-within:tw-ring-opacity-50"
      >
        <div
          class="tw-px-4 tw-flex tw-items-center tw-justify-between tw-h-full"
        >
          <div class="tw-flex tw-items-center">
            <div class="tw-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="tw-max-w-6 tw-max-h-6 tw-w-full tw-fill-gray-500"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.00591 10.4961C6.00591 8.01109 8.02091 5.99609 10.5059 5.99609C12.9899 5.99609 15.0059 8.01109 15.0059 10.4961C15.0059 12.9811 12.9899 14.9961 10.5059 14.9961C8.02091 14.9961 6.00591 12.9811 6.00591 10.4961ZM19.0749 17.6601L15.7429 14.3291C16.5329 13.2531 17.0059 11.9301 17.0059 10.4961C17.0059 6.91209 14.0899 3.99609 10.5059 3.99609C6.92091 3.99609 4.00591 6.91209 4.00591 10.4961C4.00591 14.0801 6.92091 16.9961 10.5059 16.9961C11.9349 16.9961 13.2539 16.5271 14.3279 15.7421L17.6609 19.0741C17.8569 19.2691 18.1119 19.3671 18.3679 19.3671C18.6239 19.3671 18.8799 19.2691 19.0749 19.0741C19.4659 18.6841 19.4659 18.0511 19.0749 17.6601Z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              v-model="innerValue"
              class="tw-flex tw-w-full tw-min-w-[490px] tw-outline-none tw-border-hidden tw-font-normal tw-text-base tw-text-gray-800"
              placeholder="جستجو در مقالات راهنما"
            />
          </div>
          <div v-if="innerValue.length > 1" class="" @click="removeValue">
            <!-- {{ svg }} -->
            svg
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      innerValue: '',
    }
  },
  methods: {
    removeValue() {
      this.innerValue = ''
    },
  },
}
</script>

<style lang="scss" scoped></style>
