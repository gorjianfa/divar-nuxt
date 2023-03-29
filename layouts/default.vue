<template>
  <div>
    <TopHeaderAccess class="" />
    <Nuxt />
    <CardSteretchFooter v-for="(item, i) in items" :key="i" v-bind="item" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          features: [
            { access: 'دربارۀ دیوار' },
            { access: 'دریافت برنامه' },
            { access: 'بلاگ دیوار' },
            { access: 'پشتیبانی و قوانین' },
            { access: 'تماس با پشتیبانی' },
          ],
          svg: [
            { img: 'twitter.svg' },
            { img: 'linkedin.svg' },
            { img: 'instagram.svg' },

            { img: 'film.svg' },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
