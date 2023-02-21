<template>
  <div class="tw-text-gray-600  tw-text-lg tw-font-normal">
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
