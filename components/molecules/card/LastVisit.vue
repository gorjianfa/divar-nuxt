<template>
  <div>
 
      <div
        class=" tw-w-full tw-max-w-[343px] tw-max-h-[116px] tw-h-full  tw-rounded tw-border-[1px] tw-border-solid tw-border-gray-200 tw-bg-white"
      >
      <div class="tw-p-4">
        <a href="" class=" tw-flex tw-cursor-pointer tw-no-underline">
          <div class="tw-w-full tw-max-w-[96px] tw-max-h-[83.98px] tw-h-full">
            <img
              :src="'img/last-visit/' + img"
              alt=""
              class="tw-w-full tw-h-full tw-max-w-[80px] tw-max-h-[80px] tw-rounded-md"
            />
          </div>
          <div
            class="tw-flex tw-flex-col tw-w-full tw-h-full tw-max-w-[241px] tw-max-h-[83.98px]"
          >
            <div class="tw-flex tw-flex-col">
              <span class="tw-font-medium tw-text-sm tw-text-black">{{
                title
              }}</span>
              <span class="base-text-xs tw-mt-1 tw-whitespace-nowrap"> {{ uploadDate }}</span>
            </div>
            <!--share and remove svg-->
            <div class="tw-flex tw-mt-2 tw-gap-1 tw-justify-end">
              <div class="tw-group">
                <button
                  class="tw-w-full tw-h-full tw-flex tw-max-w-[32px] tw-max-h-[32px] tw-bg-white group-hover:tw-bg-gray-100 tw-border-hidden group-hover:tw-rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="tw-p-[1px] tw-w-full tw-h-full tw-max-w-[16px] tw-max-h-4 tw-stroke-gray-500 group-hover:tw-stroke-black"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                    />
                  </svg>
                </button>
              </div>
              <div class="tw-group">
                <button
                  class="tw-w-full tw-h-full tw-flex tw-max-w-[32px] tw-max-h-[32px] tw-bg-white group-hover:tw-bg-gray-100 tw-border-hidden group-hover:tw-rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="tw-p-[1px] tw-w-full tw-h-full tw-max-w-[16px] tw-max-h-4 tw-stroke-gray-500 group-hover:tw-stroke-black"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </a>
      </div>
     </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'asdfghjkl;lkjhgfcvbn',
    },
    uploadDate: {
      type: String,
      default: 'fghj',
    },
    img: {
      type: String,
      default: 'kaktoos.png',
    },
  },
}
</script>

<style lang="scss" scoped></style>
