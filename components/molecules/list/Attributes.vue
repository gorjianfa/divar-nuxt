<template>
  <div>
    <div class="tw-w-full tw-max-w-[404px] tw-pb-4 border-bottem">
      <div class="tw-flex tw-flex-col">
        <span class="tw-mt-8 tw-mb-4 text-attrebutes">ویژگی‌ها و امکانات</span>
        <div class="tw-grid tw-grid-cols-3">
          <div
            class="tw-flex tw-flex-col tw-px-12 tw-items-center border-right"
            v-for="(item, i) in features"
            :key="i"
          >
            <Component
              :is="item.icon"
              class="tw-w-full tw-h-full tw-max-h-6 tw-max-w-[24px] tw-flex"
            />
            <div class="tw-font-light tw-text-lg tw-text-gray-600">
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import balcony from '~/assets/img/balcony.svg?inline'
import car from '~/assets/img/transporter.svg?inline'
import warehouse from '~/assets/img/warehouse.svg?inline'
export default {
  name: 'ListAttrbutes',
  props: {
    features: {
      type: Array,
      default: () => [],
    },
  },
  components: { balcony, car, warehouse },
}
</script>

<style lang="scss" scoped></style>
