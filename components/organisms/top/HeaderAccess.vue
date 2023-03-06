<template>
  <div>
    <div class="tw-w-full tw-h-full tw-max-h-16 tw-bg-white tw-shadow-md">
      <div class="tw-flex tw-items-center tw-justify-center">
        <div class="tw-px-4">
          <div class="tw-flex tw-items-center">
            <div
              class=" tw-px-2"
            >
              <img
                src="img/logo.svg"
                alt=""
                class="tw-w-full tw-h-full tw-min-w-[48px] tw-min-h-[48px] tw-flex tw-pl-2"
              />
            </div>

            <AppButton
              prependIcon="location.svg"
              title=" بابلسر"
              variant="hover"
              textSize="xSmall"
              class=" tw-border-r tw-border-solid tw-border-0 tw-border-r-gray-300 tw-mr-2"
            />

            <AppButton
              apendIcon="downArrow.svg"
              class=""
              title="دسته ها"
              variant="hover"
              textSize="xSmall"
            />

            <HeaderSearch class="tw-w-full tw-min-w-[480px] tw-px-2 tw-mb-2" />

            <TopHeaderButtons  class=" tw-mr-32"/>
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
