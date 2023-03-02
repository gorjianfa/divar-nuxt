<template>
  <div>
    <div class="tw-w-full tw-h-auto tw-max-w-[250px]">
      <div class="tw-flex tw-flex-col tw-w-full">
        <div class="tw-pt-2">
          <div class="tw-flex tw-flex-wrap tw-items-center">
            <a
              href="#"
              class="tw-p-2 base-text-xs-hover  tw-no-underline"
              v-for="(item, i) in features"
              :key="i"
              >{{ item.access }}</a
            >
          </div>

<div class="tw-w-full tw-h-full tw-max-w-[250px] tw-max-h-10">
    <div class="tw-flex tw-justify-center tw-items-center tw-w-full">
        <div class="tw-w-10 tw-h-10 tw-flex tw-justify-center "></div>
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
