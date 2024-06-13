<template>

    <div class="bg-gradient-to-b ">
        <section class="py-10 sm:py-16 lg:py-32">
            <div class="px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
                <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                    <div data-aos="flip-left" data-aos-duration="1000">
                        <h1 class="text-5xl font-bold text-black sm:text-6xl lg:text-7xl">
                            The <span class="text-[#3881f5]">Greatest</span> & Strongest Firm
                            <div class="relative inline-flex">
                                <span class="absolute inset-x-0 bottom-0 border-b-[30px] border-[#3881f5]"></span>
                                <h1 class="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">You Can True.
                                </h1>
                            </div>
                        </h1>
                        <p class="mt-8 text-base text-black sm:text-xl">Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Temporibus perferendis dicta, blanditiis iusto vel et incidunt quisquam
                            commodi illum magni distinctio dignissimos tempore!</p>

                        <div class="mt-10 sm:flex sm:items-center sm:space-x-8">
                            <a href="#" title=""
                                class="inline-flex items-center justify-center lg:px-10 px-2 lg:py-4 py-2 text-base font-semibold text-white transition-all duration-200 bg-[#021D39] hover:bg-blue-600 focus:bg-blue-600"
                                role="button"> Start exploring </a>

                            <a href="#" title=""
                                class="inline-flex items-center mt-6 px-2 lg:py-4 py-2 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80">
                                <i class="fa-solid fa-play mr-2"></i>
                                Watch video
                            </a>
                        </div>
                    </div>

                    <div data-aos="zoom-in" data-aos-duration="1200">
                        <!-- <img class="w-full" src="https://images.lawpath.com.au/2022/10/Hero_About-us-min.png" alt="" /> -->
                        <iframe width="660" height="450" class="rounded-xl w-96 lg:w-full"
                            src="https://www.youtube.com/embed/kS0544wPpyI?si=iSIl-MtyfaULZ5A4"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>
        <div class="lg:-mt-24">
            <carousel class="max-w-screen mx-auto" :items-to-show="8" :autoplay="2000" :transition="1000"
                :wrap-around="true" :breakpoints="breakpointsOne">
                <slide v-for="(scrollClint, index) in topScrollOurClints" :key="index">
                    <img width="120" :src="scrollClint.image" alt="...">
                </slide>
            </carousel>
        </div>
    </div>

    <!-- CARD SECTION START -->
    <section class="max-w-screen-xl mx-auto mb-36 lg:mt-28 mt-12 bg-[#021D39] rounded-b-xl " data-aos="zoom-in-up"
        data-aos-duration="1000">
        <div class="b px-12 py-12 rounded-xl sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-4 grid-cols-1 lg:gap-4 gap-16  my-4">
                <div v-for="card in cards"
                    class="relative flex border flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md "
                    data-aos="zoom-in" data-aos-duration="1500">
                    <div
                        class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-[#021D39]">
                        <img :src="card.image" alt="">
                    </div>
                    <div class="p-6 ">
                        <h5
                            class="mb-2 block  text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {{ card.title }}
                        </h5>
                        <p class="block  text-inherit antialiased">
                            {{ card.subtitle }}
                        </p>
                    </div>
                    <div class="p-6 pt-0">
                        <a :href="card.link" data-ripple-light="true" type="button"
                            class="select-none rounded-lg bg-[#021D39] py-3 px-6 text-center align-middle  text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- CARD SECTION END -->


    <!-- TRADEMARK & ISO CERTIFICATION START -->
    <section class="max-w-screen-xl mx-auto">
        <div>
            <!-- TRADEMARK START -->
            <div class="text-center px-10" data-aos="fade-up-right" data-aos-duration="1500">
                <h1 class="text-4xl mt-20 font-bold text-left text-gray-700">Best <span class="text-[#021D39] text-5xl">
                        Trademark
                    </span>Registration
                    Services in Asia
                    in Asia</h1>
                <p class="pt-8 mb-3 text-lg text-gray-500 font-medium" style="text-align: left">
                    Intellect Goodwill is an organization of professionals engaged in
                    providing services like IPR (Trade Marks, copyright consultants,
                    Patent and Design) registration as well as litigation in all over
                    Asia. We are a Registered Patent attorney from Govt. of India vide
                    registration no. IN/PA/940. Our reputed clients include corporates,
                    multinationals, manufacturers, service providers, and Industries. We
                    also provide services for IPR in all of Asia and Foreign IG and are
                    a member of APAA (Asian Patent Attorney Association).
                </p>

                <p class="py-3 text-lg text-gray-500 font-medium" style="text-align: left">
                    Intellect Goodwill deals in Corporate Law, Company Law, IPR & Labour
                    Law and also deals in Registration to litigation for all IPR
                    activities (Trademark, Service Mark, Copyright, Designs & Patents,
                    etc.) in all over the Asian subcontinent.
                </p>
                <p class="py-3 text-lg text-gray-500 font-medium" style="text-align: left">
                    We deal in IPR enforcement and implementation activities, we
                    endeavor to look after our clients by keeping a watch on
                    infringement, passing off of marks of competitors.
                </p>
            </div>
            <!-- TRADEMARK END -->

            <!-- ISO CERTIFICATION START -->
            <div class="text-center px-10" data-aos="fade-up-left" data-aos-duration="1500">
                <h1 class="text-4xl mt-20 font-bold text-left text-gray-700"> <span class="text-[#021D39] text-5xl">
                        ISO Certification
                    </span>in Asia</h1>

                <p class="pt-8 mb-3 text-lg text-gray-500 font-medium" style="text-align: left">
                    Quality First is a firm engaged in National and International
                    Certifications ISO 9001 (Quality Management system), 14000
                    (Environmental Management System), 18000 (Occupational health &
                    safety), 22000 (HACCP/Food Safety Management). 50001 (Enms) – energy
                    management system, 27000 (ISMS), CMMi, SA 8000, etc.
                </p>

                <p class="py-3 text-lg text-gray-500 font-medium" style="text-align: left">
                    Institute for Industrial Entrepreneur (IIE) conducts training and
                    workshops for IPRs (Intellectual Property Rights).
                </p>
            </div>
            <!-- ISO CERTIFICATION END -->
        </div>
    </section>
    <!-- TRADEMARK & ISO CERTIFICATION END -->


    <!-- OUR SECTION START -->
    <section
        class="overflow-hidden my-12 pt-20 pb-12 lg:px-0 px-8 lg:pt-[120px] lg:pb-[90px] bg-white max-w-screen-xl mx-auto"
        data-aos="zoom-in-up" data-aos-duration="1000">
        <h1 class="lg:text-5xl text-4xl mb-24 font-bold text-[#021D39] text-center">OUR NEWS</h1>
        <div class="container mx-auto items-center">
            <div class="flex flex-wrap items-center justify-between -mx-4">
                <div class="w-full px-4 lg:w-6/12">
                    <div class="flex items-center -mx-3 sm:-mx-4">
                        <div class="w-full px-3 sm:px-4 xl:w-1/2">
                            <div class="py-3 sm:py-4">
                                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="" class="w-full rounded-2xl" />
                            </div>
                            <div class="py-3 sm:py-4">
                                <img src="https://images.unsplash.com/photo-1544012627-3fbdb7969bd9?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="" class="w-full rounded-2xl" />
                            </div>
                        </div>
                        <div class="w-full px-3 sm:px-4 xl:w-1/2">
                            <div class="relative z-10 my-4">
                                <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="" class="w-full rounded-2xl" />
                                <img class="absolute -right-9 -bottom-9 z-[-1]"
                                    src="https://png.pngtree.com/png-clipart/20220924/original/pngtree-dust-isolated-on-white-background-png-image_8630874.png"
                                    alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
                    <div class="mt-10 lg:mt-0">
                        <!-- <span class="block mb-4 text-lg font-semibold text-primary">
                            Why Choose Us
                        </span> -->
                        <h2 class="mb-2 text-3xl font-bold text-dark sm:text-[24px]/[48px]">
                            26/04/16- World IP Day Celebration
                            ,Indore
                            FIVE DAYS WORKSHOP FOR INDUSTRIAL ENTREPRENEURS
                        </h2>
                        <p class="mb-5 text-base text-body-color ">
                            Brief awareness of the Acts, Implementation, Returns, offence & Penalties through lectures,
                            case studies, work shop, open-book examination & with necessary form and formats used in
                            Establishment / Industries with two type of license / permissions / certificates. this is in
                            house course of the Quality First and not accredited by the RAB QSA certification.
                            Certificate will provide by Quality First after successful completion of course. Factory
                            Act, 1948,Industrial Dispute Act, 1947 (standard standing & employment) / M.P. Industrial
                            Relation Act, Employees Provident Fund & Miscellaneous Provisions Act, 1952, Employee state
                            Insurance corporation act (ESIC ),1948,Gratuity Act, 1972, Minimum wages act. 1948, Bonus
                            Act. 1965, Health & Safety Provisions (Factory Act), Pollution Control Act/Environment
                            Protection Act. The Standard of (Weight & measurement) act,1976, Packaged commodity rules,
                            1977 & enforcement Act, 1985, Drug & cosmetic Act, 1940 with Magic Remedy Act.- Pharma
                            Industries, Insecticide Act, 1986. (CSL)-Insecticide Industries, Bureau of Indian Standard
                            Act, 1986 products specification & hallmark (Jewllery and other products)
                        </p>
                        <p class="mb-0 text-base font-bold text-body-color ">
                            FIVE (5) DAYS TRAINING & WORK-SHOP FOR
                            ISO 9001 : 2008, EMS (ISO 14000) & 22000 (FOOD
                            SAFETY) LEAD AUDITOR COURSE (RABQSA, IRCA & OSS) :
                        </p>
                        <p class="mb-8 text-base text-body-color ">
                            Certification and Training of
                            RABQSA/IRCA/UK Lead Auditor training for ISO 9001, ISO 14001 &
                            OHSAS 18001, 22000 associated with OSS Certification Services Pvt. Ltd., Delhi.OSS is a
                            RABQSA Approved Training Provider India. OSS have achieved international and industrial
                            recognition for world-class training design and delivery, and have demonstrated their
                            ability to remain at the forefront of excellence in Lead Auditor Training and examination
                            practices.
                            Our Blog
                        </p>
                        <a href="javascript:void(0)"
                            class="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-[#021D39] hover:bg-opacity-90">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- OUR SECTION END -->

    <div class="bg-[#021D39]" id="section1">
        <section class="relative block px-6 py-10 md:py-20 md:px-10  border-t border-b border-neutral-900 bg-neutral-900/30">
            <div class="relative mx-auto max-w-5xl text-center">
                <span class="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
                    Recent Posts 
                </span>
                <!-- <h2 class="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                    Exploring Innovations in Technology
                </h2> -->
                <h1 class="lg:text-5xl text-4xl lg:mb-6 mb-12 font-bold text-white text-center">Exploring Innovations in Technology</h1>

                <p class="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
                    Feel free to give more information if you need something specific!
                </p>
            </div>
            <div class="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                <div class="rounded-md border border-white bg-[#021D39] p-8 text-center shadow"
                    v-for="blog in blogs" :key="blog">
                    <div class="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                        style="background-image: linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%); border-color: rgb(93, 79, 240);">
                        <div v-if="blog.icon">
                            <i :class="blog.icon" class="text-4xl"></i>
                        </div>
                    </div>
                    <h3 class="mt-6 mb-6 text-white">{{ blog.title }}</h3>
                        <a :href="blog.link" class="text-blue-200 hover:text-blue-400 duration-500">Learn More <i class="fa fa-arrow-circle-right "></i></a>
                </div>
            </div>
            <div class="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
                style="background-image: linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%); border-color: rgba(92, 79, 240, 0.2);">
            </div>
            <div class="absolute bottom-0 right-0 z-0 h-1/3 w-full"
                style="background-image: linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%); border-color: rgba(92, 79, 240, 0.2);">
            </div>
        </section>
    </div>

    <!-- OUR BLOGS SECTION START -->
    <!-- <div class="mx-auto max-w-screen-xl my-12 py-12 lg:px-0 px-8 border border-[#021D39] rounded-xl"
        data-aos="zoom-in-up" data-aos-duration="1000">
        <h1 class="lg:text-5xl text-4xl lg:mb-24 mb-12 font-bold text-[#021D39] text-center">OUR BLOGS</h1>
        <div
            class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 lg:gap-y-16 gap-y-6 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div class="lg:px-8 lg:py-4  ">
                <div class="lg:max-w-xl">
                    <h2 class="text-base font-semibold leading-7 text-[#021D39] ">Blogs</h2>
                    <p class="lg:mb-12 mb-6 mt-6 lg:text-xl text-md leading-8 text-black">A ‘Bhidu’ Anecdote: Analysis
                        of
                        Personality Rights
                        your podcast production workflow.
                        <a href="javascript:void(0)"
                            class="inline-flex items-center text-xs ml-3 lg:py-1 lg:px- px-3 py-1 justify-center font-medium text-center text-[#021D39] border border-[#021D39] rounded-md  hover:text-white hover:bg-[#021D39]  hover:bg-opacity-90">
                            READ MORE
                        </a>
                        <button data-ripple-light="true" type="button"
                        
                            class="select-none rounded-ms rounded-xl bg-[#021D39] ml-3 lg:py-2 lg:px-4 px-3 py-1 text-center align-middle  text-xs font-medium uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            Read More
                        </button>
                    </p>

                    <p class="lg:mb-12 mb-6 lg:text-xl text-md leading-8 text-black">WORLD INTELLECTUAL PROPERTY DAY
                        CELEBRATION
                        your podcast production workflow.
                        <a href="javascript:void(0)"
                            class="inline-flex items-center text-xs ml-3 lg:py-1 lg:px- px-3 py-1 justify-center font-medium text-center text-[#021D39] border border-[#021D39] rounded-md  hover:text-white hover:bg-[#021D39]  hover:bg-opacity-90">
                            READ MORE
                        </a>
                    </p>

                    <p class="lg:mb-12 lg:text-xl text-md leading-8 text-black">Sip of Justice in a Battle of Premium
                        Whiskeys: Analysing the scope of Deceptive Similarity
                        <a href="javascript:void(0)"
                            class="inline-flex items-center text-xs ml-3 lg:py-1 lg:px- px-3 py-1 justify-center font-medium text-center text-[#021D39] border border-[#021D39] rounded-md  hover:text-white hover:bg-[#021D39] hover:bg-opacity-90">
                            READ MORE
                        </a>
                    </p>
                </div>
            </div>
            <div class="mb-0 lg:px-8">
                <img src="https://images.unsplash.com/reserve/uZYSV4nuQeyq64azfVIn_15130980706_64134efc6e_o.jpg?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Product screenshot"
                    class=" rounded-xl shadow-xl ring-1 ring-gray-400/10 w-[60rem] md:-ml-4 lg:-ml-0" width="260"
                    height="1442">
            </div>

        </div>
    </div> -->
    <!-- OUR BLOGS SECTION END -->


    <!-- OUR CLIENT START -->
    <div class="max-w-screen-xl mx-auto lg:my-12 py-24 lg:bg-transparent bg-blue-100" data-aos="zoom-in-up"
        data-aos-duration="1500">
        <h1 class="lg:text-5xl text-4xl mb-24  font-bold text-[#021D39] text-center">OUR CLIENTS </h1>
        <div class="lg:flex ">
            <span class="lg:border-[#021D39] lg:border-4 lg:rounded-xl "></span>
            <carousel class="max-w-screen-xl mx-auto my-4" :autoplay="2000" :transition="800" :wrap-around="true"
                :breakpoints="breakpoints">
                <slide v-for="(clint, index) in ourClints" :key="index">
                    <div class=" border border-slate-500 text-center rounded-xl px-12 py-6" data-aos="zoom-in-up"
                        data-aos-duration="200">
                        <img :src="clint.image" class="" alt="...">
                    </div>
                </slide>
            </carousel>
            <span class="lg:border-[#021D39] lg:border-4 lg:rounded-xl"></span>
        </div>

    </div>
    <!-- OUR CLIENT END -->

    <section class="py-20 w-full ">
        <!-- data-aos="zoom-in-up" data-aos-duration="1000" -->
        <div class="mx-auto  px-4 sm:px-6 lg:px-8">
            <div class="bg-[#021D39] rounded-2xl p-8 xl:p-11">
                <h2 class=" text-4xl text-white text-center font-bold mb-4">Subscribe to the latest
                    offer
                </h2>
                <p class="text-white text-center mb-11 max-lg:max-w-2xl mx-auto">Join our community of
                    subscribers
                    and receive regular
                    updates delivered straight to your inbox. It's quick, easy, and free</p>
                <div
                    class="max-w-md mx-auto lg:bg-transparent lg:border border-gray-300 rounded-3xl max-lg:py-3 lg:rounded-full lg:h-12 lg:p-1.5 lg:flex-row gap-6 lg:gap-0 flex-col flex items-center justify-between">
                    <input type="text" name="email"
                        class="py-2 px-6 bg-transparent rounded-full max-lg:border border-gray-300  text-gray-100 max-lg:text-center placeholder:text-gray-400 focus:outline-none flex-1 w-full lg:w-auto lg:py-2 lg:px-6 lg:bg-transparent"
                        placeholder="Enter your email..">
                    <button type="submit"
                        class="py-2 px-5 text-sm bg-blue-100 shadow-md rounded-full  text-[#021D39] font-semibold hover:bg-white">Subscribe</button>
                </div>
            </div>
        </div>
    </section>

</template>


<script>
import { onMounted } from 'vue';
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
    name: 'MouseCircles',

    data() {
        return {
            breakpoints: {
                375: { itemsToShow: 1, snapAlign: "center", },
                // 700px and up
                700: { itemsToShow: 2, snapAlign: "center", },
                // 1024 and up
                1024: { itemsToShow: 4, snapAlign: "start", },
            },


            breakpointsOne: {
                375: { itemsToShow: 2.2, snapAlign: "center", },
                // 700px and up
                700: { itemsToShow: 2, snapAlign: "center", },
                // 1024 and up
                1024: { itemsToShow: 6, snapAlign: "start", },
            },


            blogs: [
                {
                    icon: 'fa-solid fa-chart-simple',
                    title: 'A ‘Bhidu’ Anecdote: Analysis of Personality Rights',
                    link: 'recent-post/a-bhidu-anecdote'
                },
                {
                    icon: 'fa-solid fa-champagne-glasses',
                    title: 'WORLD INTELLECTUAL PROPERTY DAY CELEBRATION',
                    link: 'recent-post/world-intellectual-property-day-celebration'
                }, 
                {
                    icon: 'fa-solid fa-scale-unbalanced',
                    title: 'Sip of Justice in a Battle of Premium Whiskeys: Analysing the scope of Deceptive Similarity',
                    link: 'recent-post/sip-of-justice-in'
                },
                {
                    icon: 'fa-solid fa-timeline',
                    title: 'Time waits for no one: Delhi High Court rules on the mandatory nature of the trade mark opposition timelines',
                    link: 'recent-post/time-waits-for-no-one'
                },
                {
                    icon: '',
                    title: 'Dumplings of Delight: Famous ‘Dolma’ Aunty wins trade mark battle over her iconic momos’ joint name',
                    link: 'recent-post/dumplings-of-delight'
                }, 
                {
                    icon: 'fa-solid fa-globe',
                    title: 'AI cannot be an inventor of a patent, rules UK Supreme Court',
                    link: 'recent-post/ai-cannot-be-an-inventor'
                }, 
                {
                    icon: 'fa-regular fa-copyright',
                    title: 'In addition to registered brands, now un-registered food brands also to attract 5% GST',
                    link: 'recent-post/in-addition-to-registered-brands'
                },

            ],



            cards: [
                {
                    image: 'https://miro.medium.com/v2/resize:fit:1000/0*7oBfb11QhdJRKGiY.jpg',
                    title: 'Trademark',
                    subtitle: 'Names, Signatures, Words & Letters, Numeric and….',
                    link: '/more/trademark'
                },
                {
                    image: 'https://images.unsplash.com/photo-1589287707312-213624549c88?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    title: 'Copyright',
                    subtitle: 'Copyright is a form of IP that gives the author/owner,….',
                    link: '/more/copyright'
                }, {
                    image: 'https://media.istockphoto.com/id/899094824/photo/book-about-patent-law-and-gavel-copyright-concept.jpg?s=612x612&w=0&k=20&c=tFd4jHe8PMfWPFb5YAyKa7KRitdqpIAQrfeXxyRS_Zg=',
                    title: 'Patent',
                    subtitle: 'We understand that you are interested in protect….',
                    link: '/more/patent'
                }, {
                    image: 'https://copyrightservice.co.uk/_f/8315/8135/4000/black-pencils-and-design-word-6444.jpg',
                    title: 'Design',
                    subtitle: 'Industrial designs refer to creative activity which result in….',
                    link: '/more/design'
                },

            ],


            // OUR CLINTS SECTION START
            topScrollOurClints: [
                { image: 'http://www.trademarkiso.com/wp-content/uploads/2016/03/sugadaddy.jpg' },
                { image: 'http://www.trademarkiso.com/wp-content/uploads/2016/03/Swastika_logo.jpg' },
                { image: 'http://www.trademarkiso.com/wp-content/uploads/2016/03/SyncomLogo.jpg' },
                { image: 'http://www.trademarkiso.com/wp-content/uploads/2016/03/title1.gif' },
                { image: 'http://www.trademarkiso.com/wp-content/uploads/2016/03/vlogo.gif' },
                { image: 'http://trademarkiso.com/wp-content/uploads/2014/01/stella.jpg' },
                { image: 'http://trademarkiso.com/wp-content/uploads/2014/01/ssgrouplogo.png' },
                { image: 'http://trademarkiso.com/wp-content/uploads/2014/01/sia.png' },
                { image: 'http://trademarkiso.com/wp-content/uploads/2014/01/logo-6.png' },
                { image: 'http://trademarkiso.com/wp-content/uploads/2014/01/logo-6.jpg' },
                { image: 'http://trademarkiso.com/wp-content/uploads/2014/01/logo-5.png' },
                { image: 'http://trademarkiso.com/wp-content/uploads/2014/01/Cleantech_Logo_JPEG1.jpg' },
                { image: 'http://trademarkiso.com/wp-content/uploads/2014/01/logo-5.jpg' },
                { image: 'http://trademarkiso.com/wp-content/uploads/2014/01/logo-4.png' },
                { image: 'http://trademarkiso.com/wp-content/uploads/2014/01/logo-3.png' },
                { image: 'http://trademarkiso.com/wp-content/uploads/2014/01/logo-2.jpg' }
            ],
            // OUR CLINTS SECTION END


            // OUR CLINTS SECTION START
            ourClints: [
                { image: 'http://www.trademarkiso.com/wp-content/uploads/2016/03/sugadaddy.jpg' },
                { image: 'http://www.trademarkiso.com/wp-content/uploads/2016/03/Swastika_logo.jpg' },
                { image: 'http://www.trademarkiso.com/wp-content/uploads/2016/03/SyncomLogo.jpg' },
                { image: 'http://www.trademarkiso.com/wp-content/uploads/2016/03/title1.gif' },
                { image: 'http://www.trademarkiso.com/wp-content/uploads/2016/03/vlogo.gif' },
                { image: 'http://trademarkiso.com/wp-content/uploads/2014/01/stella.jpg' },
                { image: 'http://trademarkiso.com/wp-content/uploads/2014/01/ssgrouplogo.png' },
                { image: 'http://trademarkiso.com/wp-content/uploads/2014/01/sia.png' },
                { image: 'http://trademarkiso.com/wp-content/uploads/2014/01/logo-6.png' },
                { image: 'http://trademarkiso.com/wp-content/uploads/2014/01/logo-6.jpg' },
                { image: 'http://trademarkiso.com/wp-content/uploads/2014/01/logo-5.png' },
                { image: 'http://trademarkiso.com/wp-content/uploads/2014/01/Cleantech_Logo_JPEG1.jpg' },
                { image: 'http://trademarkiso.com/wp-content/uploads/2014/01/logo-5.jpg' },
                { image: 'http://trademarkiso.com/wp-content/uploads/2014/01/logo-4.png' },
                { image: 'http://trademarkiso.com/wp-content/uploads/2014/01/logo-3.png' },
                { image: 'http://trademarkiso.com/wp-content/uploads/2014/01/logo-2.jpg' }
            ],
            // OUR CLINTS SECTION END

        }
    },
    mounted() {
        document.addEventListener('mousemove', this.updateCursorPosition);
        AOS.init();
    },
}

</script>
<style>
.circle {
    width: 10px;
    height: 10px;
    border: 1px solid #000;
    position: absolute;
    border-radius: 15px;
}

.cursor {
    position: fixed;
    width: 20px;
    height: 20px;
    background-color: #7F51C0;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease-out;
    transform: translate(-50%, -50%);
}
</style>