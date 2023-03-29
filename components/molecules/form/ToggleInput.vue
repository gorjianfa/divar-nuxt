<template>
  <div>
    <div class="tw-w-full tw-max-w-[250px] tw-h-auto tw-px-4">
      <div class="">
        <div class="tw-flex tw-items-center tw-justify-between">
          <div class="tw-font-normal tw-text-xs tw-text-gray-700">{{status}}</div>
          <div class="">
            <label
              class="tw-relative tw-mr-5 tw-inline-flex tw-cursor-pointer tw-items-center"
            >
              <input type="checkbox" value="" class="tw-peer tw-sr-only" checked />
              <div
                class="tw-peer tw-h-[19.5px] tw-w-8 tw-rounded-full tw-bg-red-800 after:tw-absolute after:tw-top-0.5 after:tw-left-0 after:tw-h-4 after:tw-w-4 after:tw-rounded-full after:tw-bg-white after:tw-transition-transform tw-duration-700 after:tw-content-[''] peer-checked:tw-bg-gray-400 peer-checked:after:tw-translate-x-full"
              ></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        status:{
            type:String,
            default:'فقط عکس دار'
        }
    }
}
</script>

<style lang="scss" scoped></style>
