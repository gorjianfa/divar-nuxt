<template>
  <div>
    <div class="tw-w-full tw-h-full tw-max-w-[248px] tw-max-h-10 tw-flex tw-bg-emerald-400">
      <div class="tw-flex tw-flex-col tw-gap-3">
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
          <div class="base-text-sm-hover tw-whitespace-nowrap">همه اگهی ها</div>
        </div>

        <div class="">
          <ListBaseCategory v-for="(item, i) in list" :key="i" v-bind="item" />
        </div>

<div class="tw-flex tw-flex-col"> 
<div class="tw-border-solid tw-border-t  tw-border-b-gray-300 tw-border-b tw-border-t-gray-300 tw-border-0 ">
   <div class=""><SimpleSelect   value="قیمت" /></div> 

</div>
<div class="tw-border-solid tw-border-b tw-border-0 tw-border-b-gray-300">
<div class=""><SimpleSelect  value="وضعیت آگهی"  /></div></div>
</div>







      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: '',
          img: 'house.svg',
          title: 'املاک',
          category: [
            { categories: 'فروش مسکونی', id: '' },
            { categories: 'اجاره مسکونی', id: '' },
            { categories: 'فروش اداری و تجاری', id: '' },
            { categories: 'اجاره اداری و تجاری', id: '' },
            { categories: 'اجاره کوتاه مدت', id: '' },
            { categories: 'پروژه های ساخت و ساز', id: '' },
          ],
          features: [
            { branches: 'اپارتمان', id: '' },
            { branches: 'خانه و ویلا', id: '' },
            { branches: 'زمین و کلنگی', id: '' },
            { branches: '', id: '' },
          ],
        },
        {
          id: '',
          img: 'transporter.svg',
          title: 'وسایل نقلیه',
          category: [
            { categories: 'خودرو', id: '' },
            { categories: 'موتور سیکلت', id: '' },
            { categories: 'قطعات یدکی و لوازم جانبی', id: '' },
            { categories: 'قایق و سایر وسایل نقلیه', id: '' },
          ],
          features: [
            { branches: 'سواری و وانت', id: '' },
            { branches: 'کلاسیک', id: '' },
            { branches: 'اجاره ای', id: '' },
            { branches: 'سنگین', id: '' },
          ],
        },
        {
          id: '',
          img: 'digitaly.svg',
          title: 'کالای دیجیتال',
          category: [
            { categories: 'موبایل و تبلت', id: '' },
            { categories: 'رایانه', id: '' },
            { categories: 'کنسول ,بازی ویدیویی و انلاین', id: '' },
            { categories: 'صوتی و تصویری', id: '' },
            { categories: 'تلفن رومیزی', id: '' },
          ],
          features: [
            { branches: 'رایانه همراه', id: '' },
            { branches: 'رایانه رومیزی', id: '' },
            { branches: 'قطعات و لوازم جانبی', id: '' },
            { branches: 'مودم وتجهیزات شبکه', id: '' },
            { branches: 'پرینتر/اسکنر/کپی/فکس', id: '' },
          ],
        },
        {
          id: '',
          img: 'kitchen.svg',
          title: 'خانه و اشپزخانه',
          category: [
            { categories: 'لوازم خانگی برقی', id: '' },
            { categories: 'ظروف و لوازم اشپزخانه', id: '' },
            { categories: 'خوردنی و اشامیدنی', id: '' },
            { categories: 'خیاطی و بافتنی', id: '' },
            { categories: 'مبلمان و صنایع چوب', id: '' },
            { categories: 'نور و روشنایی', id: '' },
            { categories: 'فرش,گلیم و موکت', id: '' },
            { categories: 'تشک ,روتختی ورختخواب', id: '' },
            { categories: 'لوازم دکوری و تزیینی', id: '' },
            { categories: 'تهویه, سرمایش و گرمایش', id: '' },
            { categories: 'شست و شو و نظافت', id: '' },
            { categories: 'حمام و سرویس بهداشتی', id: '' },
          ],
          features: [
            { branches: 'ابگرمکن ,پکیج و شوفاژ', id: '' },
            { branches: 'بخاری, هیتر و شومینه', id: '' },
            { branches: 'کولر ابی', id: '' },
            { branches: 'پنکه و تصفیه کننده هوا', id: '' },
            { branches: 'کولر گازی', id: '' },
            { branches: 'فنکوعل', id: '' },
          ],
        },
        {
          id: '',
          img: 'services.svg',
          title: 'خدمات',
          category: [
            { categories: 'موتور و ماشین', id: '' },
            { categories: 'پذیرایی / مراسم', id: '' },
            { categories: 'خدمات رایانه ای و موبایل', id: '' },
            { categories: 'مالی/حسابداری/بیمه', id: '' },
            { categories: 'حمل و نقل', id: '' },
            { categories: 'پیشه و مهارت', id: '' },
            { categories: 'ارایشگری و زیبایی', id: '' },
            { categories: ' سرگرمی ', id: '' },
            { categories: '  نظافت', id: '' },
            { categories: ' باغبانی و درختکاری ', id: '' },
            { categories: 'اموزشی ', id: '' },
          ],
          features: [
            { branches: '', id: '' },
            { branches: '', id: '' },
            { branches: '', id: '' },
            { branches: '', id: '' },
            { branches: '', id: '' },
            { branches: '', id: '' },
            { branches: '', id: '' },
          ],
        },
        {
          id: '',
          img: 'privateDevice.svg',
          title: 'وسایل شخصی',
          category: [
            { categories: 'کیف ,کفش و لباس', id: '' },
            { categories: 'زیور الات و اکسسوری', id: '' },
            { categories: 'ارایشی,بهداشتی و درمانی', id: '' },
            { categories: 'کفش و لباس بچه', id: '' },
            { categories: 'وسایل بچه و اسباب بازی', id: '' },
            { categories: 'لوازم االتحریر', id: '' },
          ],
          features: [
            { branches: 'ساعت', id: '' },
            { branches: 'جواهرات', id: '' },
            { branches: 'بدلیجات', id: '' },
          ],
        },
        {
          id: '',
          img: 'game.svg',
          title: 'سرگرمی و فراغت',
          category: [
            { categories: 'بلیط', id: '' },
            { categories: 'تور و چارتر', id: '' },
            { categories: 'کتاب و مجله', id: '' },
            { categories: 'دوچرخه /اسکیت/اسکوتر', id: '' },
            { categories: 'حیوانات', id: '' },
            { categories: 'کلکسیون و سرگرمی', id: '' },
            { categories: 'آلات موسیقی', id: '' },
            { categories: '   ورزش و تناسب اندام', id: '' },
            { categories: '  اسباب بازی  ', id: '' },
          ],
          features: [
            { branches: 'کنسرت', id: '' },
            { branches: 'تاتر و سینما', id: '' },
            { branches: 'کارت هدیه و تخفیف', id: '' },
            { branches: ' اماکن و مسابقات ورزشی', id: '' },
            { branches: 'ورزشی', id: '' },
            { branches: 'اتوبوس ,مترو قطار', id: '' },
            { branches: 'اموزشی', id: '' },
          ],
        },
        {
          id: '',
          img: 'public.svg',
          title: 'اجتماعی',
          category: [
            { categories: 'رویداد', id: '' },
            { categories: 'داوطلبانه', id: '' },
            { categories: 'گم شده ها', id: '' },
          ],
          features: [
            { branches: 'حراج', id: '' },
            { branches: 'گرد همایی و همایش', id: '' },
            { branches: 'ورزشی', id: '' },
            { branches: 'حیوانات', id: '' },
            { branches: 'اشیا', id: '' },
            { branches: 'تحقیقاتی', id: '' },
          ],
        },
        {
          id: '',
          img: 'industrial.svg',
          title: 'تجهیزات و صنعتی',
          category: [
            { categories: 'مصالح و تجهیزات ساختمان', id: '' },
            { categories: 'ابزارآلات', id: '' },
            { categories: 'تجهیزات کسب وکار', id: '' },
            { categories: 'عمده فروشی', id: '' },
          ],
          features: [
            { branches: 'پزشکی', id: '' },
            { branches: 'فروشگاه و مغازه', id: '' },
            { branches: 'کافی شاپ و رستوران', id: '' },
            { branches: 'ارایشگاه و سالن های زیبایی', id: '' },
            { branches: 'دفترکار', id: '' },
           
          ],
        },
        {
          id: '',
          img: 'employ.svg',
          title: 'استخدام و کاریابی',
          category: [
            { categories: 'اداری و مدیریت', id: '' },
            { categories: 'سرایداری و نظافت', id: '' },
            { categories: 'معماری,عمران وساختمانی', id: '' },
            { categories: 'خدمات و فروشگاه و رستوران', id: '' },
            { categories: 'رایانه و فناوری اطلاعات', id: '' },
            { categories: 'مالی و حسابداری و حقوقی', id: '' },
            { categories: 'بازاریابی و فروش', id: '' },
            { categories: 'صنعتی و فنی و مهندسی', id: '' },
            { categories: 'آموزشی', id: '' },
            { categories: 'حمل و نقل', id: '' },
            { categories: 'درمانی و زیبایی و بهداشتی', id: '' },
            { categories: 'هنری و رسانه', id: '' },
          ],
          features: [
            { branches: '', id: '' },
            { branches: '', id: '' },
            { branches: '', id: '' },
            { branches: '', id: '' },
            { branches: '', id: '' },
            { branches: '', id: '' },
            { branches: '', id: '' },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
