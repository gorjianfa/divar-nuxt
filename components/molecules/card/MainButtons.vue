<template>
  <div>
    <div class="tw-w-full tw-h-full tw-max-w-[404px]">
      <div class="tw-my-4">
        <div class="tw-flex tw-items-center tw-justify-between">
          <div class="tw-flex tw-items-center  tw-gap-2">
            <div class="">
              <AppButton title="اطلاعات تماس" variant="fill" />
            </div>
            <div class=""><AppButton title="چت" variant="outline" /></div>
          </div>
          <div class="tw-flex tw-items-center">
            <div class="tw-group">
              <button
                class="tw-border-hidden tw-bg-white tw-cursor-pointer tw-p-2 group-hover:tw-bg-gray-100 group-hover:tw-rounded-full"
              >
                <!--save svg-->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#6b7280"
                  class="tw-w-full tw-h-full tw-max-w-[20px] tw-max-h-5 tw-flex tw-stroke-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </button>
            </div>
            <div class="tw-group">
              <!--share svg-->
              <button
                class="tw-border-hidden tw-bg-white tw-cursor-pointer tw-p-2 group-hover:tw-bg-gray-100 group-hover:tw-rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="tw-w-full tw-h-full tw-max-w-[20px] tw-max-h-5 tw-flex tw-stroke-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
