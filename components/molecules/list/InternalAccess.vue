<template>
  <div>
 

    <div class="tw-w-full tw-max-w-[208px] tw-h-12">
      <div class="tw-px-4 tw-py-2 ">
        <div class="tw-flex tw-gap-2 tw-cursor-pointer">
          <div class=""><img :src="'img/' + img" alt="" class="tw-flex tw-w-full tw-h-full tw-max-w-[20px] tw-max-h-[20px]" /></div>
          <div class="">
            <span class="base-text-sm-hover ">{{ title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: 'identity.svg',
    },
    title:{
        type:String,
        default:'تأیید هویت'
    }
  },
}
</script>

<style lang="scss" scoped></style>
