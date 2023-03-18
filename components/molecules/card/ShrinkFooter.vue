<template>
  <div>
    <div class="tw-w-full tw-h-auto tw-max-w-[248px]">
      <div class="tw-flex tw-flex-col tw-w-full">
        <div class="tw-pt-2">
          <div class="tw-flex tw-flex-wrap tw-items-center">
            <a
              href="#"
              class="tw-p-2 base-text-xs-hover tw-no-underline"
              v-for="(item, i) in features"
              :key="i"
              >{{ item.access }}</a
            >
          </div>

          <div class="tw-w-full tw-h-full tw-max-w-[248px] tw-max-h-10 tw-mt-4">
            <div class="tw-flex tw-justify-center tw-items-center tw-w-full">
              <div
                class="tw-flex tw-items-center"
                v-for="(item, i) in svg"
                :key="i"
              >
                <a
                  :href="href"
                  class="tw-w-10 tw-h-10 tw-flex tw-justify-center tw-mx-1"
                >
                  <Component
                    :is="item.icon"
                    class="hover:tw-fill-gray-400  tw-w-full tw-h-full tw-max-w-[20px] tw-max-h-5 tw-flex"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <!--mojavez-->

        <div class="tw-w-full tw-h-auto tw-max-w-[248px]">
          <div class="tw-m-3.5">
            <div class="tw-flex tw-items-center tw-gap-2">
              <div class="" v-for="(item, i) in consent" :key="i">
                <img
                  :src="require('@/assets/img/' + item.picture)"
                  alt=""
                  class="tw-w-full tw-h-full tw-max-w-[80px] tw-max-h-20 tw-flex"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import twitter from '~/assets/img/twitter.svg?inline'
import linkedin from '~/assets/img/linkedin.svg?inline'
import instagram from '~/assets/img/instagram.svg?inline'
import film from '~/assets/img/film.svg?inline'

export default {
  props: {
    features: {
      type: Array,
      default: () => [],
    },
    svg: {
      type: Array,
      default: () => [],
    },
    href: {
      type: String,
      default: '',
    },
    consent: {
      type: Array,
      default: () => [],
    },
  },
  components: { twitter, linkedin, instagram, film },
}
</script>

<style lang="scss" scoped></style>
