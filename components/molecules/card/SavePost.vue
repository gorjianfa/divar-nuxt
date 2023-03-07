<template>
  <div class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-4">
    <divcard v-for="card in cards" :key="card.id">
      <div class="tw-w-full tw-max-w-[477px] tw-max-h-[115px] tw-px-2">
        <div class="tw-border tw-border-solid tw-border-gray-300 tw-rounded">
          <a :href="href" class="tw-no-underline">
            <div class="tw-flex tw-items-center tw-gap-3 tw-p-4">
              <div class="">
                <img
                  :src="'img/main/' + card.img"
                  alt=""
                  class="tw-w-full tw-flex tw-max-w-[80px] tw-h-[80px] tw-rounded"
                />
              </div>
              <div
                class="tw-flex tw-flex-col tw-w-full tw-max-w-[332px] tw-h-full tw-max-h-[84px]"
              >
                <div class="">
                  <span class="tw-font-medium tw-text-sm tw-text-black">{{
                    card.title
                  }}</span>
                </div>
                <div class="">
                  <span class="tw-font-normal tw-text-xs tw-text-gray-500">
                    {{ card.uploadTime }} در {{ card.city }}
                  </span>
                </div>

                <div class="tw-flex tw-justify-end">
                  <div class="tw-flex tw-items-center tw-gap-1">
                    <div class="tw-group">
                      <div
                        class="tw-p-2 tw-bg-white tw-rounded-full group-hover:tw-bg-gray-100 tw-cursor-pointer"
                      >
                        <!--share svg-->
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="tw-max-w-[20px] tw-max-h-[20px] tw-w-full tw-h-full tw-flex group-hover:tw-stroke-gray-900 tw-stroke-gray-500"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="tw-group" @click="removeCard(card.id)">
                      <div
                        class="tw-p-2 tw-bg-white tw-rounded-full group-hover:tw-bg-red-50 tw-cursor-pointer"
                      >
                        <!--save svg-->

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#6b7280"
                          class="tw-max-w-[20px] tw-max-h-[20px] tw-w-full tw-h-full tw-flex tw-fill-red-600 tw-outline-none tw-stroke-none"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </divcard>
  </div>
</template>

<script>
export default {
  /*  props: {
    img: {
      type: String,
      default: 'building.jpg',
    },
    title: {
      type: String,
      default: 'اپارتمان در شریعتی',
    },
    uploadTime: {
      type: String,
      default: 'دو روز پیش  ',
    },
    city: {
      type: String,
      default: 'بابلسر',
    },
    href: {
      type: String,
      default: '#',
    },
 }, */
  data() {
    return {
      cards: [
        {
          id: 1,
          img: 'building.jpg',
          title: 'اپارتمان در شریعتی',
          uploadTime: 'نیم ساعت پیش',
          city: 'بابلسر',
          href: '#',
        },
        {
          id: 2,

          img: 'house.jpg',
          title: 'خزرشهرویلا استخر دار   ',
          uploadTime: 'دو روز پیش',
          city: 'بابلسر',
          href: '#',
        },
        {
          id: 3,

          img: 'farm.jpg',
          title: 'باغ  مرکبات  ',
          uploadTime: 'لحاظاتی پیش',
          city: 'بابل',
          href: '#',
        },
      ],
    }
  },

  methods: {
    removeCard(id) {
      const updateCard = this.cards.filter((item) => item.id !== id)
      this.cards = updateCard
    },
  },
}
</script>

<style lang="scss" scoped></style>
