<template>
  <div class="tw-max-w-[866px] tw-w-full">
    <div class="tw-h-full tw-flex-wrap tw-flex ">
      <CategoryBranches v-for="(item, i) in lists" :key="i" v-bind="item" class="tw-ml-8" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          title: 'فروش مسکونی',
          parent: 'real-estate',
          key: 'buy-residential',
          features: [
            {
              option: 'آپارتمان',
              parent: 'buy-residential',
              key: 'buy-apartment',
            },
            {
              option: 'خانه و ویلا',
              parent: 'buy-residential',
              key: 'buy-villa',
            },
            {
              option: 'زمین کلنگی',
              parent: 'buy-residential',
              key: 'buy-old-house',
            },
          ],
        },

        {
          title: 'اجاره مسکونی',

          key: 'rent-residential',
          parent: 'real-estate',
          features: [
            {
              option: 'آپارتمان',
              parent: 'rent-residential',
              key: 'rent-apartment',
            },
            {
              option: 'خانه و ویلا',
              parent: 'rent-residential',
              key: 'rent-villa',
            },
          ],
        },

        {
          title: 'فروش اداری و تجاری',

          key: 'buy-commercial-property',
          parent: 'real-estate',
          features: [
            {
              option: 'دفتر کار، اتاق اداری و مطب',
              parent: 'buy-commercial-property',
              key: 'buy-office',
            },
            {
              option: 'مغازه و غرفه',
              parent: 'buy-commercial-property',
              key: 'buy-store',
            },
            {
              option: 'صنعتی،‌ کشاورزی و تجاری',
              parent: 'buy-commercial-property',
              key: 'buy-industrial-agricultural-property',
            },

            {
              title: 'اجاره اداری و تجاری',

              key: 'rent-commercial-property',
              parent: 'real-estate',
            },
            {
              option: 'دفتر کار، اتاق اداری و مطب',
              parent: 'rent-commercial-property',
              key: 'rent-office',
            },
            {
              option: 'مغازه و غرفه',
              parent: 'rent-commercial-property',
              key: 'rent-store',
            },
            {
              option: 'صنعتی،‌ کشاورزی و تجاری',
              parent: 'rent-commercial-property',
              key: 'rent-industrial-agricultural-property',
            },
          ],
        },

        {
          title: 'اجاره کوتاه مدت',
          key: 'rent-temporary',
          parent: 'real-estate',
          features: [
            {
              option: 'آپارتمان و سوئیت',
              parent: 'rent-temporary',
              key: 'rent-temporary-suite-apartment',
            },
            {
              option: 'ویلا و باغ',
              parent: 'rent-temporary',
              key: 'rent-temporary-villa',
            },
            {
              option: 'دفتر کار و فضای آموزشی',
              parent: 'rent-temporary',
              key: 'rent-temporary-workspace',
            },
          ],
        },

        {
          title: 'پروژه های ساخت و ساز',

          key: 'real-estate-services',
          parent: 'real-estate',
          features: [
            {
              option: 'مشارکت در ساخت',
              parent: 'real-estate-services',
              key: 'contribution-construction',
            },
            {
              option: 'پیش‌ فروش',
              parent: 'real-estate-services',
              key: 'pre-sell-home',
            },
          ],
        },

        //  نقلیه وسایل

        { title: 'خودرو', parent: 'vehicles', key: 'auto' },
        { title: 'موتور سیکلت', parent: 'vehicles', key: 'motorcycles' },
        {
          title: 'قطعات یدکی و لوازم جانبی',
          parent: 'vehicles',
          key: 'car-accessories',
        },
        {
          title: 'قایق و سایر وسایل نقلیه',
          parent: 'vehicles',
          key: 'boat',
          features: [
            { option: 'سواری و وانت', parent: 'auto', key: 'car' },
            { option: 'کلاسیک', parent: 'auto', key: 'classic-car' },
            { option: 'اجاره‌ای', parent: 'auto', key: 'rental-car' },
            { option: 'سنگین', parent: 'auto', key: 'heavy-car' },
          ],
        },

        { title: '', parent: '', key: '' },

        // // // // //  کالای دیجیتال

        {
          title: 'موبایل و تبلت',
          parent: 'electronic-devices ',
          key: 'mobile-tablet',
          features: [
            {
              option: 'گوشی موبایل',
              parent: 'mobile-tablet',
              key: 'mobile-phones',
            },
            { option: 'تبلت', parent: 'mobile-tablet', key: 'tablet' },
            {
              option: 'لوازم جانبی موبایل و تبلت',
              parent: 'mobile-tablet',
              key: 'mobile-tablet-accessories',
            },
            { option: 'سیم کارت', parent: 'mobile-tablet', key: 'sim-card' },
          ],
        },

        {
          title: 'رایانه',
          parent: 'electronic-devices ',
          key: 'computers',
          features: [
            {
              option: 'رایانه همراه',
              parent: 'computers',
              key: 'laptop-notebook-macbook',
            },
            {
              option: 'رایانه رومیزی',
              parent: 'computers',
              key: 'desktop-computer',
            },
          ],
        },

        {
          option: 'قطعات و لوازم جانبی',
          parent: 'computers',
          key: 'computer-parts-accessories',
          features: [
            {
              option: 'مودم و تجهیزات شبکه',
              parent: 'computers',
              key: 'modem-network-equipments',
            },
            {
              option: 'پرینتر/اسکنر/کپی/فکس',
              parent: 'computers',
              key: 'printer-scanner-fax',
            },
          ],
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
          features: [
            {
              option: 'فیلم و موسیقی',
              parent: 'video-audio-device',
              key: 'film-music',
            },
            {
              option: 'دوربین عکاسی و فیلم‌برداری',
              parent: 'video-audio-device',
              key: 'camera',
            },
            {
              option: 'پخش‌کننده همراه',
              parent: 'video-audio-device',
              key: 'headphone-speaker-microphone',
            },
            {
              option: 'سیستم صوتی خانگی',
              parent: 'video-audio-device',
              key: 'home-audio-system',
            },
            {
              option: 'ویدئو و پخش کننده DVD',
              parent: 'video-audio-device',
              key: 'dvd-bluray-player',
            },
            {
              option: 'تلویزیون و پروژکتور',
              parent: 'video-audio-device',
              key: 'tv-projector',
            },
            {
              option: 'دوربین مداربسته',
              parent: 'video-audio-device',
              key: 'cctv',
            },
          ],
        },

        {
          title: 'تلفن رومیزی',
          parent: 'electronic-devices',
          key: 'telephone',
        },

        // // // / خانه و آشپزخانه

        {
          title: 'لوازم خانگی برقی',
          parent: 'home-kitchen',
          key: 'appliance',
          features: [
            {
              option: 'یخچال و فریزر',
              parent: 'appliance',
              key: 'refrigerator-freezer',
            },
            {
              option: 'آب‌سردکن و تصفیه آب',
              parent: 'appliance',
              key: 'water-cooler-refinery',
            },
            { option: 'ماشین ظرفشویی', parent: 'appliance', key: 'dishwasher' },
            {
              option: 'جاروبرقی، جاروشارژی و بخارشو',
              parent: 'appliance',
              key: 'vacuums-cleaner',
            },
            {
              option: 'اتو و لوازم اتو',
              parent: 'appliance',
              key: 'steam-iron',
            },
            {
              option: 'آبمیوه و آب‌ مرکبات‌گیر',
              parent: 'appliance',
              key: 'juicers',
            },
            {
              option: 'خردکن، آسیاب و غذاساز',
              parent: 'appliance',
              key: 'food-mill',
            },
            {
              option: 'سماور، چای‌ساز و قهوه‌ساز',
              parent: 'appliance',
              key: 'drink-maker',
            },
            {
              option: 'اجاق گاز و لوازم برقی پخت‌وپز',
              parent: 'appliance',
              key: 'oven-baking-appliances',
            },
            { option: 'هود', parent: 'appliance', key: 'range-hood' },
            {
              option: 'سایر لوازم برقی',
              parent: 'appliance',
              key: 'other-appliances',
            },
          ],
        },

        {
          title: 'ظروف و لوازم آشپزخانه',
          parent: 'home-kitchen',
          key: 'kitchen-utensils',
          features: [
            {
              option: 'سفره، حوله و دستمال آشپزخانه',
              parent: 'kitchen-utensils',
              key: 'tablecloths',
            },
            {
              option: 'آب‌چکان و نظم‌دهنده ظروف',
              parent: 'kitchen-utensils ',
              key: 'container-organizers',
            },
            {
              option: 'قوری، کتری و قهوه‌ساز دستی',
              parent: 'kitchen-utensils',
              key: 'pot-kettle',
            },
            {
              option: 'ظروف سرو و پذیرایی',
              parent: 'kitchen-utensils',
              key: 'home-catering',
            },
            {
              option: 'ظروف نگهدارنده، پلاستیکی و یکبارمصرف',
              parent: 'kitchen-utensils',
              key: 'containers',
            },
            {
              option: 'ظروف پخت‌وپز',
              parent: 'kitchen-utensils',
              key: 'cooking-utensils',
            },
          ],
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
          features: [
            {
              option: 'لوازم خیاطی و بافتنی',
              parent: 'sewing-knitting',
              key: 'sewing-accessories',
            },
          ],
        },

        {
          title: 'مبلمان و صنایع چوب',
          parent: 'home-kitchen',
          key: 'furniture-wood',
          features: [
            {
              option: 'مبلمان خانگی و میزعسلی',
              parent: 'furniture-wood',
              key: 'furniture',
            },
            {
              option: 'میز و صندلی غذاخوری',
              parent: 'furniture-wood',
              key: 'dining-table',
            },
            {
              option: 'بوفه، ویترین و کنسول',
              parent: 'furniture-wood',
              key: 'buffet-showcases',
            },
            {
              option: 'کتابخانه، شلف و قفسه‌های دیواری',
              parent: 'furniture-wood',
              key: 'bookcase-shelf',
            },
            {
              option: 'جاکفشی، کمد و دراور',
              parent: 'furniture-wood',
              key: 'shoe-rack-drawer',
            },
            {
              option: 'تخت و سرویس خواب',
              parent: 'furniture-wood',
              key: 'bed-service',
            },
            { option: 'میز تلفن', parent: 'furniture-wood', key: 'phone-desk' },
            {
              option: 'میز تلویزیون',
              parent: 'furniture-wood',
              key: 'tv-stand',
            },
            {
              option: 'میز تحریر و کامپیوتر',
              parent: 'furniture-wood',
              key: 'desk',
            },
            {
              option: 'مبلمان اداری',
              parent: 'furniture-wood',
              key: 'office-decoration',
            },
            {
              option: 'صندلی و نیمکت',
              parent: 'furniture-wood',
              key: 'chair-bench',
            },
          ],
        },

        {
          title: 'نور و روشنایی',
          parent: 'home-kitchen',
          key: 'home-lighting',
          features: [
            {
              option: 'لوستر و چراغ آویز',
              parent: 'home-lighting',
              key: 'chandeliers',
            },
            {
              option: 'ریسه و چراغ تزئینی',
              parent: 'home-lighting',
              key: 'yarn-lights',
            },
            { option: 'لامپ و چراغ', parent: 'home-lighting', key: 'lamps' },
            {
              option: 'چراغ خواب و آباژور',
              parent: 'home-lighting',
              key: 'lampshade',
            },
          ],
        },

        {
          title: 'فرش، گلیم و موکت',
          parent: 'home-kitchen',
          key: 'carpet-moquette',
          features: [
            { option: 'فرش', parent: 'carpet-moquette', key: 'carpet' },
            {
              option: 'تابلو فرش',
              parent: 'carpet-moquette',
              key: 'pictorial-carpet',
            },
            {
              option: 'روفرشی',
              parent: 'carpet-moquette',
              key: 'rubber-carpet',
            },
            { option: 'پادری', parent: 'carpet-moquette', key: 'mat' },
            { option: 'موکت', parent: 'carpet-moquette', key: 'moquette' },
            {
              option: 'گلیم، جاجیم و گبه',
              parent: 'carpet-moquette',
              key: 'rugs-woolen-cloth',
            },
            { option: 'پشتی', parent: 'carpet-moquette', key: 'lumbar-pillow' },
          ],
        },

        {
          title: 'تشک، روتختی و رختخواب',
          parent: 'home-kitchen',
          key: 'sleep-goods',
          features: [
            {
              option: 'رختخواب، بالش و پتو',
              parent: 'sleep-goods',
              key: 'bed-pillow-blanket',
            },
            { option: 'تشک تختخواب', parent: 'sleep-goods', key: 'mattress' },
            { option: 'سرویس روتختی', parent: 'sleep-goods', key: 'bed-sheet' },
          ],
        },

        {
          title: 'لوازم دکوری و تزئینی',
          parent: 'home-kitchen',
          key: 'decoration',
          features: [
            {
              option: 'پرده، رانر و رومیزی',
              parent: 'decoration',
              key: 'curtains-table-cover',
            },
            { option: 'آینه', parent: 'decoration', key: 'mirror' },
            {
              option: 'ساعت دیواری و تزئینی',
              parent: 'decoration',
              key: 'wall-clock ',
            },
            {
              option: 'تابلو، نقاشی و عکس',
              parent: 'decoration',
              key: 'paintings-picture',
            },
            {
              option: 'مجسمه، تندیس و ماکت',
              parent: 'decoration',
              key: 'figurines',
            },
            {
              option: 'گل مصنوعی',
              parent: 'decoration',
              key: 'artificial-flower',
            },
            {
              option: 'گل و گیاه طبیعی',
              parent: 'decoration',
              key: 'natural-plants',
            },
            {
              option: 'صنایع دستی و سایر لوازم تزئینی',
              parent: 'decoration',
              key: 'crafts',
            },
          ],
        },

        {
          title: 'تهویه، سرمایش و گرمایش',
          parent: 'home-kitchen',
          key: 'ventilation-cooling-heating',
          features: [
            {
              option: 'آبگرمکن، پکیج و شوفاژ',
              parent: 'ventilation-cooling-heating',
              key: 'water-heater-package-radiator',
            },
            {
              option: 'بخاری، هیتر و شومینه',
              parent: 'ventilation-cooling-heating',
              key: 'stoves-heaters-fireplaces',
            },
            {
              option: 'کولر آبی',
              parent: 'ventilation-cooling-heating',
              key: 'water-cooler',
            },
            {
              option: 'کولر گازی و فن‌کوئل',
              parent: 'ventilation-cooling-heating',
              key: 'air-conditioning-fan-coil',
            },
            {
              option: 'پنکه و تصفیه‌کنندهٔ هوا',
              parent: 'ventilation-cooling-heating',
              key: 'fan-ventilator-humidifier',
            },
          ],
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
          features: [
            {
              option: 'لوازم نظافت',
              parent: 'washing-cleaning',
              key: 'cleaning-supplies',
            },
            {
              option: 'بندرخت و رخت‌آویز',
              parent: 'washing-cleaning',
              key: 'clothes-rack',
            },
          ],
        },

        {
          title: 'حمام و سرویس بهداشتی',
          parent: 'home-kitchen',
          key: 'bathrooms',
          features: [
            {
              option: 'لوازم حمام',
              parent: 'bathrooms',
              key: 'bathroom-accessories',
            },
            {
              option: 'لوازم سرویس بهداشتی',
              parent: 'bathrooms',
              key: 'wc-accessories',
            },
          ],
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
          features: [
            { option: 'ساعت', parent: 'accessories', key: 'watches' },
            { option: 'جواهرات', parent: 'accessories', key: 'jewellery' },
            { option: 'بدلیجات', parent: 'accessories', key: 'trinket' },
          ],
        },

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
          features: [
            {
              option: 'اسباب بازی',
              parent: 'child-products',
              key: 'child-toys',
            },
            {
              option: 'کالسکه و لوازم جانبی',
              parent: 'child-products',
              key: 'stroller',
            },
            {
              option: 'صندلی بچه',
              parent: 'child-products',
              key: 'child-furniture',
            },
            {
              option: 'اسباب و اثاث بچه',
              parent: 'child-products',
              key: 'child-stuff',
            },
          ],
        },
        { title: 'لوازم التحریر', parent: 'personal-goods', key: 'stationery' },

        // // //  سرگرمی و فراغت

        {
          title: 'بلیط',
          parent: ' entertainment',
          key: 'ticket',
          features: [
            { option: 'کنسرت', parent: 'ticket', key: 'concert-ticket' },
            {
              option: 'تئاتر و سینما',
              parent: 'ticket',
              key: 'theatre-cinema-ticket',
            },
            {
              option: 'کارت هدیه و تخفیف',
              parent: 'ticket',
              key: 'discount-gift-card',
            },
            {
              option: 'اماکن و مسابقات ورزشی',
              parent: 'ticket',
              key: 'match-sport-ticket',
            },
            { option: 'ورزشی', parent: 'ticket', key: 'sport-ticket' },
            {
              option: 'اتوبوس، مترو و قطار',
              parent: 'ticket',
              key: 'travel-ticket',
            },
          ],
        },
        { title: 'تور و چارتر', parent: ' entertainment', key: 'tours' },
        {
          title: 'کتاب و مجله',
          parent: ' entertainment',
          key: 'publication',
          features: [
            {
              option: 'آموزشی',
              parent: ' publication',
              key: 'educational-book',
            },
            { option: 'ادبی', parent: 'publication', key: 'literary-book' },
            { option: 'تاریخی', parent: 'publication', key: 'historical-book' },
            { option: 'مذهبی', parent: 'publication', key: 'religious-book' },
            { option: 'مجلات', parent: 'publication', key: 'magazine' },
          ],
        },

        {
          title: 'دوچرخه/اسکیت/اسکوتر',
          parent: 'entertainment',
          key: 'bike-skate-scooter',
        },
        {
          title: 'حیوانات',
          parent: 'entertainment',
          key: 'pets-animals',
          features: [
            { option: 'گربه', parent: 'pets-animals', key: 'cats' },
            { option: 'موش و خرگوش', parent: 'pets-animals', key: 'rodents' },
            { option: 'خزنده', parent: 'pets-animals', key: 'reptiles' },
            { option: 'پرنده', parent: 'pets-animals', key: 'birds' },
            { option: 'ماهی', parent: 'pets-animals', key: 'fish' },
            {
              option: 'لوازم جانبی',
              parent: 'pets-animals',
              key: 'pet-supplies',
            },
            {
              option: 'حیوانات مزرعه',
              parent: 'pets-animals',
              key: 'farm-animals',
            },
            { option: 'سگ', parent: 'pets-animals', key: 'dog' },
            {
              title: 'کلکسیون و سرگرمی',
              parent: 'entertainment',
              key: 'collecting',
            },
            {
              option: 'سکه، تمبر و اسکناس',
              parent: 'collecting',
              key: 'stamp-coin-collecting',
            },
            {
              option: 'اشیای عتیقه',
              parent: 'collecting',
              key: 'antique-objects',
            },
          ],
        },

        {
          title: 'آلات موسیقی',
          parent: 'entertainment',
          key: 'musical-instruments',
          features: [
            {
              option: 'گیتار، بیس و امپلیفایر',
              parent: 'musical-instruments',
              key: 'guitars',
            },
            {
              option: 'سازهای بادی',
              parent: 'musical-instruments',
              key: 'wind-instrument',
            },
            {
              option: 'پیانو/کیبورد/آکاردئون',
              parent: 'musical-instruments',
              key: 'organ-piano-accordion',
            },
            {
              option: 'سنتی',
              parent: 'musical-instruments',
              key: 'iranian-instruments',
            },
            {
              option: 'درام و پرکاشن',
              parent: 'musical-instruments',
              key: 'percussion-instruments',
            },
            { option: 'ویولن', parent: 'musical-instruments', key: 'violons' },
            {
              title: 'ورزش و تناسب اندام',
              parent: 'entertainment',
              key: 'sport-entertainment',
            },
            {
              option: 'ورزش‌های توپی',
              parent: 'sport-entertainment',
              key: 'ball-sports',
            },
            {
              option: 'کوهنوردی و کمپینگ',
              parent: 'sport-entertainment',
              key: 'mountaineering-camping',
            },
            {
              option: 'غواصی و ورزش‌های آبی',
              parent: 'sport-entertainment',
              key: 'water-sports',
            },
            {
              option: 'ماهیگیری',
              parent: 'sport-entertainment',
              key: 'gfishin',
            },
            {
              option: 'تجهیزات ورزشی',
              parent: 'sport-entertainment',
              key: 'sport-equipment',
            },
            {
              option: 'ورزش‌های زمستانی',
              parent: 'sport-entertainment',
              key: 'winter-sports',
            },
            {
              option: 'اسب و تجهیزات اسب سواری',
              parent: 'sport-entertainment',
              key: '/horse-riding',
            },
          ],
        },

        { title: 'اسباب‌ بازی', parent: 'entertainment', key: 'game-and-toys' },

        // // // // // // //  اجتماعی

        {
          title: 'رویداد',
          parent: 'social-services',
          key: 'event',
          features: [
            { option: 'حراج', parent: 'event', key: 'auction' },
            {
              option: 'گردهمایی و همایش',
              parent: 'event',
              key: 'seminars-conference',
            },
            { option: 'ورزشی', parent: 'event', key: 'events-sports' },
          ],
        },

        {
          title: 'داوطلبانه',
          parent: 'social-services',
          key: 'voluntary',
          features: [
            {
              option: 'تحقیقاتی',
              parent: 'voluntary',
              key: 'education-research-partner',
            },
          ],
        },

        {
          title: 'گم‌شده‌ها',
          parent: 'social-services',
          key: 'missing',
          features: [
            { option: 'حیوانات', parent: 'missing', key: 'lost-animals' },
            { option: 'اشیا', parent: 'missing', key: 'lost-objects' },
          ],
        },

        // // // // // /تجهیزات و صنعتی

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
          features: [
            {
              option: 'پزشکی',
              parent: 'work-equipment',
              key: 'medical-equipment',
            },
            {
              option: 'فروشگاه و مغازه',
              parent: 'work-equipment',
              key: 'store-equipment',
            },
            {
              option: 'کافی‌شاپ و رستوران',
              parent: 'work-equipment',
              key: 'restaurant-equipment',
            },
            {
              option: 'آرایشگاه و سالن های زیبایی',
              parent: 'work-equipment',
              key: 'barber-shop-equipment',
            },
            {
              option: 'دفتر کار',
              parent: 'work-equipment',
              key: 'office-equipment ',
            },
          ],
        },

        {
          title: 'عمده فروشی',
          parent: 'tools-materials-equipment',
          key: 'wholesale',
        },

        // // // / استخدام

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
    }
  },
}
</script>

<style lang="scss" scoped></style>
