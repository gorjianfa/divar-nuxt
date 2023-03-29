<template>
  <div>
    <div class="">
      <input type="text" class="" v-model="searchQuery" />
    </div>

    <div
      class="tw-w-full tw-h-full tw-max-w-[248px] tw-max-h-10 tw-flex tw-bg-white"
    >
      <div class="tw-flex tw-flex-col tw-gap-3 tw-w-full tw-h-40">
        <div
          class="tw-py-2 tw-font-normal tw-text-xs tw-text-black tw-whitespace-nowrap"
        >
          دسته ها
        </div>
        <div class="tw-py-2 tw-flex tw-items-center tw-gap-2">
          <div class="">
            <!--base arrow-->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              class="tw-max-w-[20px] tw-max-h-5 tw-w-full tw-h-full tw-flex tw-stroke-gray-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
          <nuxt-link
            to="/"
            class="base-text-sm-hover tw-whitespace-nowrap tw-no-underline"
            >همه اگهی ها</nuxt-link
          >
        </div>

        <div class="kt-textarea__field tw-overflow-y-scroll">
          <ListBaseCategory
            v-for="(item, i) in resultQuery"
            :key="i"
            v-bind="item"
          />
        </div>

        <div class="tw-flex tw-flex-col">
          <div class="border-top border-bottem">
            <div class=""><SimpleSelect value="قیمت" /></div>
          </div>
          <div class="border-bottem">
            <div class=""><StatuseItem /></div>
          </div>
          <!--footer-->
          <div class="">
            <CardShrinkFooter
              v-for="(item, i) in items"
              :key="i"
              v-bind="item"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          features: [
            { access: 'درباره دیوار' },
            { access: 'دریافت برنامه' },
            { access: 'بلاگ دیوار' },
            { access: 'کسب وکار ها' },
            { access: 'پشتیبانی و قوانین' },
          ],
          svg: [
            { icon: 'twitter' },
            { icon: 'linkedin' },
            { icon: 'instagram' },

            { icon: 'film' },
          ],
          consent: [
            { picture: 'mojavez.png' },
            { picture: 'mojavez2.png' },
            { picture: 'mojavez3.png' },
          ],
        },
      ],

      list2: [
        {
          img: 'house.svg',
          title: 'املاک',
          key: 'real-estate',
          parent: 'root',
        },
        { title: 'فروش مسکونی', parent: 'real-estate', key: 'buy-residential' },

        { title: 'آپارتمان', parent: 'buy-residential', key: 'buy-apartment' },
        { title: 'خانه و ویلا', parent: 'buy-residential', key: 'buy-villa' },
        {
          title: 'زمین کلنگی',
          parent: 'buy-residential',
          key: 'buy-old-house',
        },

        {
          title: 'اجاره مسکونی',

          key: 'rent-residential',
          parent: 'real-estate',
        },
        {
          title: 'آپارتمان',
          parent: 'rent-residential',
          key: 'rent-apartment',
        },
        { title: 'خانه و ویلا', parent: 'rent-residential', key: 'rent-villa' },

        {
          title: 'فروش اداری و تجاری',

          key: 'buy-commercial-property',
          parent: 'real-estate',
        },

        {
          title: 'دفتر کار، اتاق اداری و مطب',
          parent: 'buy-commercial-property',
          key: 'buy-office',
        },
        {
          title: 'مغازه و غرفه',
          parent: 'buy-commercial-property',
          key: 'buy-store',
        },
        {
          title: 'صنعتی،‌ کشاورزی و تجاری',
          parent: 'buy-commercial-property',
          key: 'buy-industrial-agricultural-property',
        },

        {
          title: 'اجاره اداری و تجاری',

          key: 'rent-commercial-property',
          parent: 'real-estate',
        },
        {
          title: 'دفتر کار، اتاق اداری و مطب',
          parent: 'rent-commercial-property',
          key: 'rent-office',
        },
        {
          title: 'مغازه و غرفه',
          parent: 'rent-commercial-property',
          key: 'rent-store',
        },
        {
          title: 'صنعتی،‌ کشاورزی و تجاری',
          parent: 'rent-commercial-property',
          key: 'rent-industrial-agricultural-property',
        },

        {
          title: 'اجاره کوتاه مدت',
          key: 'rent-temporary',
          parent: 'real-estate',
        },
        {
          title: 'آپارتمان و سوئیت',
          parent: 'rent-temporary',
          key: 'rent-temporary-suite-apartment',
        },
        {
          title: 'ویلا و باغ',
          parent: 'rent-temporary',
          key: 'rent-temporary-villa',
        },
        {
          title: 'دفتر کار و فضای آموزشی',
          parent: 'rent-temporary',
          key: 'rent-temporary-workspace',
        },

        {
          title: 'پروژه های ساخت و ساز',

          key: 'real-estate-services',
          parent: 'real-estate',
        },
        {
          title: 'مشارکت در ساخت',
          parent: 'real-estate-services',
          key: 'contribution-construction',
        },
        {
          title: 'پیش‌ فروش',
          parent: 'real-estate-services',
          key: 'pre-sell-home',
        },

        //  نقلیه وسایل
        {
          img: 'transporter.svg',
          title: 'وسایل نقلیه',
          parent: 'root',
          key: ' vehicles',
        },

        { title: 'خودرو', parent: 'vehicles', key: 'auto' },
        { title: 'موتور سیکلت', parent: 'vehicles', key: 'motorcycles' },
        {
          title: 'قطعات یدکی و لوازم جانبی',
          parent: 'vehicles',
          key: 'car-accessories',
        },
        { title: 'قایق و سایر وسایل نقلیه', parent: 'vehicles', key: 'boat' },
        { title: 'سواری و وانت', parent: 'auto', key: 'car' },
        { title: 'کلاسیک', parent: 'auto', key: 'classic-car' },
        { title: 'اجاره‌ای', parent: 'auto', key: 'rental-car' },
        { title: 'سنگین', parent: 'auto', key: 'heavy-car' },
        { title: '', parent: '', key: '' },

        // // // // //  کالای دیجیتال

        {
          img: 'digitaly.svg',
          title: 'کالای دیجیتال',
          parent: 'root',
          key: 'electronic-devices ',
        },

        {
          title: 'موبایل و تبلت',
          parent: 'electronic-devices ',
          key: 'mobile-tablet',
        },
        { title: 'گوشی موبایل', parent: 'mobile-tablet', key: 'mobile-phones' },
        { title: 'تبلت', parent: 'mobile-tablet', key: 'tablet' },
        {
          title: 'لوازم جانبی موبایل و تبلت',
          parent: 'mobile-tablet',
          key: 'mobile-tablet-accessories',
        },
        { title: 'سیم کارت', parent: 'mobile-tablet', key: 'sim-card' },

        { title: 'رایانه', parent: 'electronic-devices ', key: 'computers' },
        {
          title: 'رایانه همراه',
          parent: 'computers',
          key: 'laptop-notebook-macbook',
        },
        {
          title: 'رایانه رومیزی',
          parent: 'computers',
          key: 'desktop-computer',
        },
        {
          title: 'قطعات و لوازم جانبی',
          parent: 'computers',
          key: 'computer-parts-accessories',
        },
        {
          title: 'مودم و تجهیزات شبکه',
          parent: 'computers',
          key: 'modem-network-equipments',
        },
        {
          title: 'پرینتر/اسکنر/کپی/فکس',
          parent: 'computers',
          key: 'printer-scanner-fax',
        },
        {
          title: 'کنسول، بازی‌ ویدئویی و آنلاین',
          parent: 'electronic-devices',
          key: 'game-consoles',
        },
        {
          title: 'صوتی و تصویری',
          parent: 'electronic-devices',
          key: 'video-audio-device',
        },
        {
          title: 'فیلم و موسیقی',
          parent: 'video-audio-device',
          key: 'film-music',
        },
        {
          title: 'دوربین عکاسی و فیلم‌برداری',
          parent: 'video-audio-device',
          key: 'camera',
        },
        {
          title: 'پخش‌کننده همراه',
          parent: 'video-audio-device',
          key: 'headphone-speaker-microphone',
        },
        {
          title: 'سیستم صوتی خانگی',
          parent: 'video-audio-device',
          key: 'home-audio-system',
        },
        {
          title: 'ویدئو و پخش کننده DVD',
          parent: 'video-audio-device',
          key: 'dvd-bluray-player',
        },
        {
          title: 'تلویزیون و پروژکتور',
          parent: 'video-audio-device',
          key: 'tv-projector',
        },
        { title: 'دوربین مداربسته', parent: 'video-audio-device', key: 'cctv' },
        {
          title: 'تلفن رومیزی',
          parent: 'electronic-devices',
          key: 'telephone',
        },

        // // // / خانه و آشپزخانه

        {
          img: 'kitchen.svg',
          title: 'خانه و اشپزخانه',
          parent: 'root',
          key: 'home-kitchen ',
        },

        { title: 'لوازم خانگی برقی', parent: 'home-kitchen', key: 'appliance' },
        {
          title: 'یخچال و فریزر',
          parent: 'appliance',
          key: 'refrigerator-freezer',
        },
        {
          title: 'آب‌سردکن و تصفیه آب',
          parent: 'appliance',
          key: 'water-cooler-refinery',
        },
        { title: 'ماشین ظرفشویی', parent: 'appliance', key: 'dishwasher' },
        {
          title: 'جاروبرقی، جاروشارژی و بخارشو',
          parent: 'appliance',
          key: 'vacuums-cleaner',
        },
        { title: 'اتو و لوازم اتو', parent: 'appliance', key: 'steam-iron' },
        {
          title: 'آبمیوه و آب‌ مرکبات‌گیر',
          parent: 'appliance',
          key: 'juicers',
        },
        {
          title: 'خردکن، آسیاب و غذاساز',
          parent: 'appliance',
          key: 'food-mill',
        },
        {
          title: 'سماور، چای‌ساز و قهوه‌ساز',
          parent: 'appliance',
          key: 'drink-maker',
        },
        {
          title: 'اجاق گاز و لوازم برقی پخت‌وپز',
          parent: 'appliance',
          key: 'oven-baking-appliances',
        },
        { title: 'هود', parent: 'appliance', key: 'range-hood' },
        {
          title: 'سایر لوازم برقی',
          parent: 'appliance',
          key: 'other-appliances',
        },

        {
          title: 'ظروف و لوازم آشپزخانه',
          parent: 'home-kitchen',
          key: 'kitchen-utensils',
        },
        {
          title: 'سفره، حوله و دستمال آشپزخانه',
          parent: 'kitchen-utensils',
          key: 'tablecloths',
        },
        {
          title: 'آب‌چکان و نظم‌دهنده ظروف',
          parent: 'kitchen-utensils ',
          key: 'container-organizers',
        },
        {
          title: 'قوری، کتری و قهوه‌ساز دستی',
          parent: 'kitchen-utensils',
          key: 'pot-kettle',
        },
        {
          title: 'ظروف سرو و پذیرایی',
          parent: 'kitchen-utensils',
          key: 'home-catering',
        },
        {
          title: 'ظروف نگهدارنده، پلاستیکی و یکبارمصرف',
          parent: 'kitchen-utensils',
          key: 'containers',
        },
        {
          title: 'ظروف پخت‌وپز',
          parent: 'kitchen-utensils',
          key: 'cooking-utensils',
        },

        {
          title: 'خوردنی و آشامیدنی',
          parent: 'home-kitchen',
          key: 'food-and-drink',
        },
        {
          title: 'خیاطی و بافتنی',
          parent: 'home-kitchen',
          key: 'sewing-knitting',
        },
        {
          title: 'چرخ خیاطی و ریسندگی',
          parent: ' sewing-knitting',
          key: 'sewing-machine',
        },
        {
          title: 'لوازم خیاطی و بافتنی',
          parent: 'sewing-knitting',
          key: 'sewing-accessories',
        },
        {
          title: 'مبلمان و صنایع چوب',
          parent: 'home-kitchen',
          key: 'furniture-wood',
        },
        {
          title: 'مبلمان خانگی و میزعسلی',
          parent: 'furniture-wood',
          key: 'furniture',
        },
        {
          title: 'میز و صندلی غذاخوری',
          parent: 'furniture-wood',
          key: 'dining-table',
        },
        {
          title: 'بوفه، ویترین و کنسول',
          parent: 'furniture-wood',
          key: 'buffet-showcases',
        },
        {
          title: 'کتابخانه، شلف و قفسه‌های دیواری',
          parent: 'furniture-wood',
          key: 'bookcase-shelf',
        },
        {
          title: 'جاکفشی، کمد و دراور',
          parent: 'furniture-wood',
          key: 'shoe-rack-drawer',
        },
        {
          title: 'تخت و سرویس خواب',
          parent: 'furniture-wood',
          key: 'bed-service',
        },
        { title: 'میز تلفن', parent: 'furniture-wood', key: 'phone-desk' },
        { title: 'میز تلویزیون', parent: 'furniture-wood', key: 'tv-stand' },
        {
          title: 'میز تحریر و کامپیوتر',
          parent: 'furniture-wood',
          key: 'desk',
        },
        {
          title: 'مبلمان اداری',
          parent: 'furniture-wood',
          key: 'office-decoration',
        },
        {
          title: 'صندلی و نیمکت',
          parent: 'furniture-wood',
          key: 'chair-bench',
        },
        {
          title: 'نور و روشنایی',
          parent: 'home-kitchen',
          key: 'home-lighting',
        },
        {
          title: 'لوستر و چراغ آویز',
          parent: 'home-lighting',
          key: 'chandeliers',
        },
        {
          title: 'ریسه و چراغ تزئینی',
          parent: 'home-lighting',
          key: 'yarn-lights',
        },
        { title: 'لامپ و چراغ', parent: 'home-lighting', key: 'lamps' },
        {
          title: 'چراغ خواب و آباژور',
          parent: 'home-lighting',
          key: 'lampshade',
        },
        {
          title: 'فرش، گلیم و موکت',
          parent: 'home-kitchen',
          key: 'carpet-moquette',
        },
        { title: 'فرش', parent: 'carpet-moquette', key: 'carpet' },
        {
          title: 'تابلو فرش',
          parent: 'carpet-moquette',
          key: 'pictorial-carpet',
        },
        { title: 'روفرشی', parent: 'carpet-moquette', key: 'rubber-carpet' },
        { title: 'پادری', parent: 'carpet-moquette', key: 'mat' },
        { title: 'موکت', parent: 'carpet-moquette', key: 'moquette' },
        {
          title: 'گلیم، جاجیم و گبه',
          parent: 'carpet-moquette',
          key: 'rugs-woolen-cloth',
        },
        { title: 'پشتی', parent: 'carpet-moquette', key: 'lumbar-pillow' },
        {
          title: 'تشک، روتختی و رختخواب',
          parent: 'home-kitchen',
          key: 'sleep-goods',
        },
        {
          title: 'رختخواب، بالش و پتو',
          parent: 'sleep-goods',
          key: 'bed-pillow-blanket',
        },
        { title: 'تشک تختخواب', parent: 'sleep-goods', key: 'mattress' },
        { title: 'سرویس روتختی', parent: 'sleep-goods', key: 'bed-sheet' },

        {
          title: 'لوازم دکوری و تزئینی',
          parent: 'home-kitchen',
          key: 'decoration',
        },
        {
          title: 'پرده، رانر و رومیزی',
          parent: 'decoration',
          key: 'curtains-table-cover',
        },
        { title: 'آینه', parent: 'decoration', key: 'mirror' },
        {
          title: 'ساعت دیواری و تزئینی',
          parent: 'decoration',
          key: 'wall-clock ',
        },
        {
          title: 'تابلو، نقاشی و عکس',
          parent: 'decoration',
          key: 'paintings-picture',
        },
        {
          title: 'مجسمه، تندیس و ماکت',
          parent: 'decoration',
          key: 'figurines',
        },
        { title: 'گل مصنوعی', parent: 'decoration', key: 'artificial-flower' },
        {
          title: 'گل و گیاه طبیعی',
          parent: 'decoration',
          key: 'natural-plants',
        },
        {
          title: 'صنایع دستی و سایر لوازم تزئینی',
          parent: 'decoration',
          key: 'crafts',
        },
        {
          title: 'تهویه، سرمایش و گرمایش',
          parent: 'home-kitchen',
          key: 'ventilation-cooling-heating',
        },
        {
          title: 'آبگرمکن، پکیج و شوفاژ',
          parent: 'ventilation-cooling-heating',
          key: 'water-heater-package-radiator',
        },
        {
          title: 'بخاری، هیتر و شومینه',
          parent: 'ventilation-cooling-heating',
          key: 'stoves-heaters-fireplaces',
        },
        {
          title: 'کولر آبی',
          parent: 'ventilation-cooling-heating',
          key: 'water-cooler',
        },
        {
          title: 'کولر گازی و فن‌کوئل',
          parent: 'ventilation-cooling-heating',
          key: 'air-conditioning-fan-coil',
        },
        {
          title: 'پنکه و تصفیه‌کنندهٔ هوا',
          parent: 'ventilation-cooling-heating',
          key: 'fan-ventilator-humidifier',
        },
        {
          title: 'شست‌وشو و نظافت',
          parent: 'home-kitchen',
          key: 'washing-cleaning',
        },
        {
          title: 'مواد شوینده و دستمال کاغذی',
          parent: 'washing-cleaning',
          key: 'washing-cleaning',
        },
        {
          title: 'لوازم نظافت',
          parent: 'washing-cleaning',
          key: 'cleaning-supplies',
        },
        {
          title: 'بندرخت و رخت‌آویز',
          parent: 'washing-cleaning',
          key: 'clothes-rack',
        },
        {
          title: 'حمام و سرویس بهداشتی',
          parent: 'home-kitchen',
          key: 'bathrooms',
        },
        {
          title: 'لوازم حمام',
          parent: 'bathrooms',
          key: 'bathroom-accessories',
        },
        {
          title: 'لوازم سرویس بهداشتی',
          parent: 'bathrooms',
          key: 'wc-accessories',
        },
        // // // // // //  خدمات
        {
          img: 'services.svg',
          title: 'خدمات',
          parent: 'root',
          key: 'services ',
        },
        {
          title: 'موتور و ماشین',
          parent: 'services',
          key: 'vehicles-services',
        },
        {
          title: 'پذیرایی/مراسم',
          parent: 'services',
          key: 'catering-services',
        },
        {
          title: 'خدمات رایانه‌ای و موبایل',
          parent: 'services',
          key: 'technology-services',
        },
        {
          title: 'مالی/حسابداری/بیمه',
          parent: 'services',
          key: 'financial-services',
        },
        {
          title: 'حمل و نقل',
          parent: 'services',
          key: 'transport-logistic-services',
        },
        {
          title: 'پیشه و مهارت',
          parent: 'services',
          key: 'craft-skill-services',
        },
        {
          title: 'آرایشگری و زیبایی',
          parent: 'services',
          key: 'beauty-services',
        },
        { title: 'سرگرمی', parent: 'services', key: 'entertaining-services' },
        { title: 'نظافت', parent: 'services', key: 'cleaning-services' },
        {
          title: 'باغبانی و درختکاری',
          parent: 'services',
          key: 'gardening-services',
        },
        { title: 'آموزشی', parent: 'services', key: 'teaching-services' },

        // // // // / لوازم شخصی

        {
          img: 'privateDevice.svg',
          title: 'وسایل شخصی',
          parent: 'root',
          key: ' personal-goods',
        },
        { title: 'کیف، کفش و لباس', parent: 'personal-goods', key: 'apparel' },
        {
          title: 'کیف/کفش/کمربند',
          parent: 'personal-goods',
          key: 'bag-shoes-belt',
        },
        { title: 'لباس', parent: 'personal-goods', key: 'clothing' },
        {
          title: 'زیورآلات و اکسسوری',
          parent: 'personal-goods',
          key: 'accessories',
        },
        { title: 'ساعت', parent: 'accessories', key: 'watches' },
        { title: 'جواهرات', parent: 'accessories', key: 'jewellery' },
        { title: 'بدلیجات', parent: 'accessories', key: 'trinket' },
        {
          title: 'آرایشی، بهداشتی و درمانی',
          parent: 'personal-goods',
          key: 'beauty-and-personal-care',
        },
        {
          title: 'کفش و لباس بچه',
          parent: 'personal-goods',
          key: 'child-apparel',
        },
        {
          title: 'وسایل بچه و اسباب بازی',
          parent: 'personal-goods',
          key: 'child-products',
        },
        { title: 'اسباب بازی', parent: 'child-products', key: 'child-toys' },
        {
          title: 'کالسکه و لوازم جانبی',
          parent: 'child-products',
          key: 'stroller',
        },
        {
          title: 'صندلی بچه',
          parent: 'child-products',
          key: 'child-furniture',
        },
        {
          title: 'اسباب و اثاث بچه',
          parent: 'child-products',
          key: 'child-stuff',
        },
        { title: 'لوازم التحریر', parent: 'personal-goods', key: 'stationery' },

        // // //  سرگرمی و فراغت
        {
          img: 'game.svg',
          title: 'سرگرمی و فراغت',
          parent: 'root',
          key: ' entertainment',
        },

        { title: 'بلیط', parent: ' entertainment', key: 'ticket' },
        { title: 'کنسرت', parent: 'ticket', key: 'concert-ticket' },
        {
          title: 'تئاتر و سینما',
          parent: 'ticket',
          key: 'theatre-cinema-ticket',
        },
        {
          title: 'کارت هدیه و تخفیف',
          parent: 'ticket',
          key: 'discount-gift-card',
        },
        {
          title: 'اماکن و مسابقات ورزشی',
          parent: 'ticket',
          key: 'match-sport-ticket',
        },
        { title: 'ورزشی', parent: 'ticket', key: 'sport-ticket' },
        {
          title: 'اتوبوس، مترو و قطار',
          parent: 'ticket',
          key: 'travel-ticket',
        },
        { title: 'تور و چارتر', parent: ' entertainment', key: 'tours' },
        { title: 'کتاب و مجله', parent: ' entertainment', key: 'publication' },
        { title: 'آموزشی', parent: ' publication', key: 'educational-book' },
        { title: 'ادبی', parent: 'publication', key: 'literary-book' },
        { title: 'تاریخی', parent: 'publication', key: 'historical-book' },
        { title: 'مذهبی', parent: 'publication', key: 'religious-book' },
        { title: 'مجلات', parent: 'publication', key: 'magazine' },
        {
          title: 'دوچرخه/اسکیت/اسکوتر',
          parent: 'entertainment',
          key: 'bike-skate-scooter',
        },
        { title: 'حیوانات', parent: 'entertainment', key: 'pets-animals' },
        { title: 'گربه', parent: 'pets-animals', key: 'cats' },
        { title: 'موش و خرگوش', parent: 'pets-animals', key: 'rodents' },
        { title: 'خزنده', parent: 'pets-animals', key: 'reptiles' },
        { title: 'پرنده', parent: 'pets-animals', key: 'birds' },
        { title: 'ماهی', parent: 'pets-animals', key: 'fish' },
        { title: 'لوازم جانبی', parent: 'pets-animals', key: 'pet-supplies' },
        { title: 'حیوانات مزرعه', parent: 'pets-animals', key: 'farm-animals' },
        { title: 'سگ', parent: 'pets-animals', key: 'dog' },
        {
          title: 'کلکسیون و سرگرمی',
          parent: 'entertainment',
          key: 'collecting',
        },
        {
          title: 'سکه، تمبر و اسکناس',
          parent: 'collecting',
          key: 'stamp-coin-collecting',
        },
        { title: 'اشیای عتیقه', parent: 'collecting', key: 'antique-objects' },
        {
          title: 'آلات موسیقی',
          parent: 'entertainment',
          key: 'musical-instruments',
        },
        {
          title: 'گیتار، بیس و امپلیفایر',
          parent: 'musical-instruments',
          key: 'guitars',
        },
        {
          title: 'سازهای بادی',
          parent: 'musical-instruments',
          key: 'wind-instrument',
        },
        {
          title: 'پیانو/کیبورد/آکاردئون',
          parent: 'musical-instruments',
          key: 'organ-piano-accordion',
        },
        {
          title: 'سنتی',
          parent: 'musical-instruments',
          key: 'iranian-instruments',
        },
        {
          title: 'درام و پرکاشن',
          parent: 'musical-instruments',
          key: 'percussion-instruments',
        },
        { title: 'ویولن', parent: 'musical-instruments', key: 'violons' },
        {
          title: 'ورزش و تناسب اندام',
          parent: 'entertainment',
          key: 'sport-entertainment',
        },
        {
          title: 'ورزش‌های توپی',
          parent: 'sport-entertainment',
          key: 'ball-sports',
        },
        {
          title: 'کوهنوردی و کمپینگ',
          parent: 'sport-entertainment',
          key: 'mountaineering-camping',
        },
        {
          title: 'غواصی و ورزش‌های آبی',
          parent: 'sport-entertainment',
          key: 'water-sports',
        },
        { title: 'ماهیگیری', parent: 'sport-entertainment', key: 'gfishin' },
        {
          title: 'تجهیزات ورزشی',
          parent: 'sport-entertainment',
          key: 'sport-equipment',
        },
        {
          title: 'ورزش‌های زمستانی',
          parent: 'sport-entertainment',
          key: 'winter-sports',
        },
        {
          title: 'اسب و تجهیزات اسب سواری',
          parent: 'sport-entertainment',
          key: '/horse-riding',
        },
        { title: 'اسباب‌ بازی', parent: 'entertainment', key: 'game-and-toys' },

        // // // // // // //  اجتماعی

        {
          img: 'public.svg',
          title: 'اجتماعی',
          parent: 'root',
          key: ' social-services',
        },
        { title: 'رویداد', parent: 'social-services', key: 'event' },
        { title: 'حراج', parent: 'event', key: 'auction' },
        {
          title: 'گردهمایی و همایش',
          parent: 'event',
          key: 'seminars-conference',
        },
        { title: 'ورزشی', parent: 'event', key: 'events-sports' },
        { title: 'داوطلبانه', parent: 'social-services', key: 'voluntary' },
        {
          title: 'تحقیقاتی',
          parent: 'voluntary',
          key: 'education-research-partner',
        },
        { title: 'گم‌شده‌ها', parent: 'social-services', key: 'missing' },
        { title: 'حیوانات', parent: 'missing', key: 'lost-animals' },
        { title: 'اشیا', parent: 'missing', key: 'lost-objects' },
        // // // // // /تجهیزات و صنعتی
        {
          img: 'industrial.svg',
          title: 'تجهیزات و صنعتی',
          parent: 'root',
          key: 'tools-materials-equipment ',
        },

        {
          title: 'مصالح و تجهیزات ساختمان',
          parent: 'tools-materials-equipment',
          key: 'building-equipment',
        },
        {
          title: 'ابزارآلات',
          parent: 'tools-materials-equipment',
          key: 'toolbox',
        },
        {
          title: 'ماشین‌آلات صنعتی',
          parent: 'tools-materials-equipment',
          key: 'industrial-machinery',
        },
        {
          title: 'تجهیزات کسب‌وکار',
          parent: 'tools-materials-equipment',
          key: 'work-equipment',
        },
        { title: 'پزشکی', parent: 'work-equipment', key: 'medical-equipment' },
        {
          title: 'فروشگاه و مغازه',
          parent: 'work-equipment',
          key: 'store-equipment',
        },
        {
          title: 'کافی‌شاپ و رستوران',
          parent: 'work-equipment',
          key: 'restaurant-equipment',
        },
        {
          title: 'آرایشگاه و سالن های زیبایی',
          parent: 'work-equipment',
          key: 'barber-shop-equipment',
        },
        {
          title: 'دفتر کار',
          parent: 'work-equipment',
          key: 'office-equipment ',
        },
        {
          title: 'عمده فروشی',
          parent: 'tools-materials-equipment',
          key: 'wholesale',
        },

        // // // / استخدام

        {
          img: 'employ.svg',
          title: 'استخدام و کاریابی',
          parent: 'root',
          key: 'jobs ',
        },
        { title: 'اداری و مدیریت', parent: 'jobs', key: 'administrative-jobs' },
        { title: 'سرایداری و نظافت', parent: 'jobs', key: 'janitorial-jobs' },
        {
          title: 'معماری ،عمران و ساختمانی',
          parent: 'jobs',
          key: 'architect-jobs',
        },
        {
          title: 'خدمات فروشگاه و رستوران',
          parent: 'jobs',
          key: 'service-jobs',
        },
        {
          title: 'رایانه و فناوری اطلاعات',
          parent: 'jobs',
          key: 'it-computer-jobs',
        },
        {
          title: 'مالی و حسابداری و حقوقی',
          parent: 'jobs',
          key: 'finance-legal-jobs',
        },
        { title: 'بازاریابی و فروش', parent: 'jobs', key: 'marketing-jobs' },
        {
          title: 'صنعتی و فنی و مهندسی',
          parent: 'jobs',
          key: 'technical-jobs',
        },
        { title: 'آموزشی', parent: 'jobs', key: 'teaching-jobs' },
        { title: 'حمل و نقل', parent: 'jobs', key: 'transport-delivery-jobs' },
        {
          title: 'درمانی و زیبایی و بهداشتی',
          parent: 'jobs',
          key: 'health-beauty-jobs',
        },
        { title: 'هنری و رسانه', parent: 'jobs', key: 'art-media-jobs' },
      ],

      searchQuery: null,
    }
  },
  // computed: {
  // filteredItems() {
  // return this.list2.filter(item => {
  //  return item.parent.toLowerCase().indexOf(this.input.toLowerCase())
  // })
  // }
  // }
  //  computed: {
  //  filteredItems() {
  //   return this.list2.filter((item) => item.parent !== this.input)
  //  },
  //  },
  /*
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.list2.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(' ')
            .every((v) => item.parent.toLowerCase().includes(v))
        })
      } else {
        return this.list2
      }
    },
  }, */

  computed: {
    /*  resultQuery() {
      if (this.searchQuery) {
        return this.list2.filter((item) => {
          return this.searchQuery
            .split(' ')
            .every((v) => item.parent.includes(v))
        })
      } else {
        return this.list2
      }
    }, */
    resultQuery() {
      if (this.searchQuery) {
        return this.list2.filter((item) => this.searchQuery === item.parent)
      } else {
        return this.list2
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
