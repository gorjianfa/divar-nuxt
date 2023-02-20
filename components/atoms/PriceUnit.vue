<template>
  <div class="tw-bg-gray-50 tw-text-red-500">
    {{ title }}
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped></style>
