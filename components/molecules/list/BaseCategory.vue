<template>
  <div>
    <div class="tw-w-full tw-h-full tw-max-w-[248px] tw-max-h-10 tw-flex">
      <div class="tw-py-2 tw-flex tw-items-center tw-gap-2.5">
        <div class="" v-if="img">
          <img
              :src="require('@/assets/img/' + img)"
            alt=""
            class="tw-w-full tw-h-full tw-flex tw-max-w-[20px] tw-max-h-5"
          />
        </div>
        <div class="">
          <div class="base-text-sm-hover tw-whitespace-nowrap">{{ title }}</div>

          <div class="tw-pr-10" v-if="branchesCategory">
            <div class="tw-flex tw-flex-col tw-gap-2.5">
              <li
                class="tw-list-none base-text-sm-hover"
                v-for="(item, i) in category"
                :key="i"
              >
                {{ item.title }}
              </li>
            </div>
            <div class="" v-if="branchList">
              <div class="tw-pr-4">
                <div
                  class="tw-border-r tw-border-solid tw-border-0 tw-border-t-gray-300"
                >
                  <li
                    class="tw-list-none base-text-xs-hover tw-pr-[0.5px]"
                    v-for="(item, i) in features"
                    :key="i"
                  >
                    {{ item.title }}
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  props: {
    title: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
    branchesCategory: {
      type: String,
      default: '',
    },

    category: {
      type: String,
      default: '',
    },
    branchList: {
      type: String,
      default: '',
    },
    features: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped></style>
