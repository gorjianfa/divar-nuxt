<template>
  <div class="tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-z-10">
    <div class="tw-w-full  tw-h-16 tw-bg-white tw-shadow-md">
      <div class="tw-flex tw-items-center tw-justify-center">
        <div class="tw-px-2 tw-py-2">
          <div class="tw-flex tw-items-center tw-gap-2">
            <div class="tw-px-2">
              <img
                src="img/logo.svg"
                alt=""
                class="tw-w-[48px] tw-h-[48px] tw-flex tw-pl-2"
              />
            </div>

            <AppButton
              prependIcon="location.svg"
              title=" بابلسر"
              variant="hover"
              textSize="xSmall"
              class="tw-border-r tw-border-solid tw-border-0 tw-border-r-gray-300 tw-mr-2 tw-pr-2"
            />

            <AppButton
              apendIcon="downArrow.svg"
              class=""
              title="دسته ها"
              variant="hover"
              textSize="xSmall"
            />

            <HeaderSearch class="tw-w-full tw-min-w-[480px] tw-px-2 tw-mb-2" />

            <TopHeaderButtons class="" />
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
