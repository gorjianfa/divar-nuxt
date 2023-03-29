<template>
  <div>
    <div class="tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-z-10 tw-block">
      <div class="tw-w-full tw-h-16 tw-bg-white tw-shadow-md">
        <div class="">
          <div class="tw-px-2 tw-py-2 tw-container">
            <div class="tw-flex tw-items-center tw-justify-between tw-w-full">
              <div class="tw-flex tw-items-center tw-gap-2">
                <div class="tw-px-2">
                  <img
                    :src="require('@/assets/img/logo.svg')"
                    alt=""
                    class="tw-w-[48px] tw-h-[48px] tw-flex tw-pl-2"
                  />
                </div>

                <AppButton
                  prependIcon="location"
                  title=" بابلسر"
                  variant="hover"
                  textSize="xSmall"
                  class="border-right tw-mr-2 tw-pr-2"
                />
              </div>

              <div class=""><TopHeaderButtons class="" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
