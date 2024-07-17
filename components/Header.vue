<template>
  <div class="bg-gradient-to-b from-blue-50 to-blue-100">
    <header class="">
      <section class="bg-[#021D39] min-h-[40px] px-4 py-4 sm:px-10 flex items-center max-sm:flex-col">
        <button type="button" class="text-white text-sm items-center">
          <i class="fa-solid fa-phone-volume mr-3"></i><a href="tel:9425318625">09425318625</a> <a href="tel:9893055685">/ 09893055685</a>
           
        </button>
        <span class="border-l h-3 mx-6 max-sm:hidden"></span>
        <button type="button" class="text-white text-sm max-sm:my-2 items-center">
          <i class="fa-regular fa-envelope mr-3"></i>
          info@trademarkiso.com
        </button>
        <div class="sm:ml-auto text-white">
          <ul class="flex space-x-6">
            <li> <a href="https://www.facebook.com/people/Intellect-Goodwill/100054228290681/"><i
                  class="fa-brands fa-facebook text-gray-300 hover:text-white duration-500 w-7 h-7 text-xl"></i></a>
            </li>
            <li> <a href="https://www.linkedin.com/company/intellect-goodwill?_l=en_US"><i
                  class="fa-brands fa-linkedin-in text-gray-300 hover:text-white duration-500 w-7 h-7 text-xl"></i></a>
            </li>
            <li> <a href="https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html"><i
                  class="fa-brands fa-google text-gray-300 hover:text-white duration-500 w-7 h-7 text-xl"></i></a>
            </li>
            <li> <a href="https://x.com/i/flow/login?redirect_after_login=%2Fintellectgdwill"><i
                  class="fa-brands fa-x-twitter text-gray-300 hover:text-white duration-500 w-7 h-7 text-xl"></i></a>
            </li>
          </ul>
          <!-- <a href="javscript:void(0)" class="text-white text-sm mr-1">Sign In</a>
          /
          <a href="javscript:void(0)" class="text-white text-sm ml-1">Sign Up</a> -->
        </div>
      </section>
      <div class="px-4 mx-auto sm:px-6 lg:px-8 shadow-lg">
        <div class="flex items-center justify-between h-16 lg:h-20">
          <div class="flex-shrink-0">
            <a href="#" title="" class="flex">
              <img class="w-auto h-16" src="/images/logo1.png" alt="" />
            </a>
          </div>

          <button type="button"
            class="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100">
            <!-- Menu open: "hidden", Menu closed: "block" -->
            <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

            <!-- Menu open: "block", Menu closed: "hidden" -->
            <svg class="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <div class="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
            <a :href="menu.link" title="" v-for="menu in menus"
              class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">
              {{ menu.title }} </a>
            <!-- About DROP LIST START -->
            <li class='group max-lg:border-b max-lg:py-3 relative list-none'>
              <a href='javascript:void(0)'
                class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold lg:hover:fill-[#007bff] block'>About
                <i class="fa-solid fa-chevron-down ml-1 inline-block" width="16px" height="16px"></i>
              </a>
              <ul
                class='absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                <li class='border-b py-1.5 '><a href='/about/team'
                    class='hover:text-[#007bff] text-gray-600 text-sm font-bold block'>TEAM</a>
                </li>
                <li class='border-b py-1.5 '><a href='/about/publish'
                    class='hover:text-[#007bff] text-gray-600 text-sm font-bold block'>PUBLICATION</a>
                </li>
                <li class='border-b py-1.5 '><a href='/about/law'
                    class='hover:text-[#007bff] text-gray-600 text-sm font-bold block'>LAW</a>
                </li>
                <li class='border-b py-1.5 '><a href='javascript:void(0)'
                    class='hover:text-[#007bff] text-gray-600 text-sm font-bold block'>OUR
                    CLIENTS</a></li>
                <li class='border-b py-1.5 '><a href='/about/gallery'
                    class='hover:text-[#007bff] text-gray-600 text-sm font-bold block'>GALLERY</a>
                </li>
                <li class='border-b py-1.5 '><a href='/about/faq'
                    class='hover:text-[#007bff] text-gray-600 text-sm font-bold block'>FAQ</a>
                </li>
              </ul>
            </li>
            <!-- About DROP LIST END -->

            <!-- TRADEMARK DROP LIST START -->
            <li class='group max-lg:border-b max-lg:py-3 relative list-none'>
              <a href='javascript:void(0)'
                class='hover:text-[#007bff] text-gray-600 text-sm font-bold lg:hover:fill-[#007bff] block'>Trademark
                <i class="fa-solid fa-chevron-down ml-1 inline-block" width="16px" height="16px"></i>
              </a>
              <ul
                class='absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                <li class='border-b py-1.5 '><a href='/trademark/trademark-reg-in-india'
                    class='hover:text-[#007bff] text-gray-600 text-sm font-bold block'>TRADEMARK
                    REG. SERVICES INDIA</a>
                </li>
                <li class='border-b py-1.5 '><a href='/trademark/trademark-reg-process'
                    class='hover:text-[#007bff] text-gray-600 text-sm font-bold block'>TRADEMARK
                    REG. PROCESS</a>
                </li>
                <!-- <li class='border-b py-1.5 '><a href='/trademark/trademark-reg-cites
                                    ' class='hover:text-[#007bff] text-gray-600 text-sm font-bold block'>TRADEMARK
                    REG. CITIES</a>
                </li> -->
                <li class="group max-lg:border-b max-lg:py-3 relative list-none">
                  <details class="">
                    <summary class="bg-blue-100 border-b py-1.5 rounded-l-lg border-[#021D39]">
                      <span class="font-semibold text-sm">STARTUP REG.</span>
                    </summary>
                    <ul class="ml-8 space-y-4">
                      <li class='border-b py-1.5 '><a href='/trademark/startup-reg/geographical-indignation-reg'
                          class='hover:text-[#007bff] text-gray-600 text-xs font-bold block'>GEOGRAPHICAL INDIGNATION REG.</a>
                      </li>
                    </ul>
                  </details>
                </li>

              </ul>
            </li>
            <!-- TRADEMARK DROP LIST END -->

            <!-- COPYRIGHT DROP LIST START -->
            <li class='group max-lg:border-b max-lg:py-3 relative list-none'>
              <a href='javascript:void(0)'
                class='hover:text-[#007bff] text-gray-600 text-sm font-bold lg:hover:fill-[#007bff] block'>Copyrights
                <i class="fa-solid fa-chevron-down ml-1 inline-block" width="16px" height="16px"></i>
              </a>
              <ul
                class='absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                <li class='border-b py-1.5 '><a href='/copyright/cr-reg-process'
                    class='hover:text-[#007bff] text-gray-600 text-sm font-bold block'>COPYRIGHT
                    REG. PROCESS </a>
                </li>
                <!-- <li class='border-b py-1.5 '><a href='/trademark/trademark-reg-cites'
                    class='hover:text-[#007bff] text-gray-600 text-sm font-bold block'>COPYRIGHT
                    REG. CITIES</a>
                </li> -->
              </ul>
            </li>
            <!-- COPYRIGHT DROP LIST END -->

            <!-- PATENT DROP LIST START -->
            <li class='group max-lg:border-b max-lg:py-3 relative list-none'>
              <a href='javascript:void(0)'
                class='hover:text-[#007bff] text-gray-600 text-sm font-bold lg:hover:fill-[#007bff] block'>Patent
                <i class="fa-solid fa-chevron-down ml-1 inline-block" width="16px" height="16px"></i>
              </a>
              <ul
                class='absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                <li class='border-b py-1.5 '><a href='/patent/patent-reg-in-india'
                    class='hover:text-[#007bff] text-gray-600 text-sm font-bold block'>PATENT REG.
                    SERVICES INDIA</a>
                </li>
                <li class='border-b py-1.5 '><a href='/patent/patent-reg-process'
                    class='hover:text-[#007bff] text-gray-600 text-sm font-bold block'>PATENT REG.
                    PROCESS</a>
                </li>
                <!-- <li class='border-b py-1.5 '><a href='/trademark/trademark-reg-cites'
                    class='hover:text-[#007bff] text-gray-600 text-sm font-bold block'>PATENT REG.
                    CITIES</a>
                </li> -->
              </ul>
            </li>
            <!-- PATENT DROP LIST END -->

            <!-- DESIGN DROP LIST START -->
            <li class='group max-lg:border-b max-lg:py-3 relative list-none'>
              <a href='javascript:void(0)'
                class='hover:text-[#007bff] text-gray-600 text-sm font-bold lg:hover:fill-[#007bff] block'>Design
                <i class="fa-solid fa-chevron-down ml-1 inline-block" width="16px" height="16px"></i>
              </a>
              <ul
                class='absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                <li class='border-b py-1.5 '><a href='/design/design-reg-process'
                    class='hover:text-[#007bff] text-gray-600 text-sm font-bold block'>DESIGN REG.
                    PROCESS</a>
                </li>
                <!-- <li class='border-b py-1.5 '><a href='/trademark/trademark-reg-cites'
                    class='hover:text-[#007bff] text-gray-600 text-sm font-bold block'>DESIGN REG.
                    CITIES</a>
                </li> -->
              </ul>
            </li>
            <!-- DESIGN DROP LIST END -->

            <!-- ISO CERTIFICATION START -->
            <li class='group max-lg:border-b max-lg:py-3 relative list-none'>
              <a href='javascript:void(0)'
                class='hover:text-[#007bff] text-gray-600 text-sm font-bold lg:hover:fill-[#007bff] block'>ISO
                Certification
                <i class="fa-solid fa-chevron-down ml-1 inline-block" width="16px" height="16px"></i>
              </a>
              <ul
                class='absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-10 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                <!-- <li class='border-b py-1.5 '><a href='javascript:void(0)'
                    class='hover:text-[#007bff] text-gray-600 text-sm font-bold block'>SA 8000</a>
                </li> -->
                <li class="group max-lg:border-b max-lg:py-3 relative list-none">
                  <details class="">
                    <summary class="bg-blue-100 border-b py-1.5 rounded-l-lg border-[#021D39]">
                      <span class="font-semibold text-sm">SA 8000</span>
                    </summary>
                    <ul class="ml-8 space-y-4">
                      <li class='border-b py-1.5 '><a href='/ISO-Certification/sa_8000/cert-for-exp'
                          class='hover:text-[#007bff] text-gray-600 text-xs font-bold block'>SOCIAL ACCOUNTABILITY 8000
                          CERT. FOR EXPORT</a>
                      </li>
                      <li class='border-b py-1.5 '><a href='/ISO-Certification/sa_8000/cert-gar-indu'
                          class='hover:text-[#007bff] text-gray-600 text-xs font-bold block'>SOCIAL ACCOUNTABILITY 8000
                          CERT. FOR GARMENT INDUSTRIES</a>
                      </li>
                      <li class='border-b py-1.5 '><a href='/ISO-Certification/sa_8000/cert-textile-indu'
                          class='hover:text-[#007bff] text-gray-600 text-xs font-bold block'>SOCIAL ACCOUNTABILITY 8000
                          CERT. FOR TEXTILE INDUSTRIES</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <!-- <li class='border-b py-1.5 '><a href='/ISO-Certification/iso_cert_cities'
                    class='hover:text-[#007bff] text-gray-600 text-sm font-bold block'>ISO CERT CITIES</a>
                </li> -->
                <li class='border-b py-1.5 '><a href='/ISO-Certification/iso-9001-2008-cert'
                    class='hover:text-[#007bff] text-gray-600 text-sm font-bold block'>ISO 9001 2008 CERT</a>
                </li>
                <li class='border-b py-1.5 '><a href='/ISO-Certification/iso-14001-2004-cert'
                    class='hover:text-[#007bff] text-gray-600 text-sm font-bold block'>ISO 14001 2004 CERT</a>
                </li>
                <li class='border-b py-1.5 '><a href='/ISO-Certification/iso-22000-cert'
                    class='hover:text-[#007bff] text-gray-600 text-sm font-bold block'>ISO 22000 CERT.</a>
                </li>
                <li class='border-b py-1.5 '><a href='/ISO-Certification/OHSAS-18001-cert'
                    class='hover:text-[#007bff] text-gray-600 text-sm font-bold block'>OHSAS 18001 CERT.</a>
                </li>
                <li class='border-b py-1.5 '><a href='/ISO-Certification/iso-50001-Cert'
                    class='hover:text-[#007bff] text-gray-600 text-sm font-bold block'>ISO 50001 CERT.</a>
                </li>
                <li class='border-b py-1.5 '><a href='/ISO-Certification/iso-27001-cert'
                    class='hover:text-[#007bff] text-gray-600 text-sm font-bold block'>ISO 27001 CERT.</a>
                </li>
                <li class='border-b py-1.5 '><a href='/ISO-Certification/iso-27000-series-cert'
                    class='hover:text-[#007bff] text-gray-600 text-sm font-bold block'>ISO 27000 Series CERT.</a>
                </li>
                <li class='border-b py-1.5 '><a href='/ISO-Certification/iso-13485-cert'
                    class='hover:text-[#007bff] text-gray-600 text-sm font-bold block'>ISO 13485 CERT.</a>
                </li>
                <li class='border-b py-1.5 '><a href='/ISO-Certification/HACCP-Cert'
                    class='hover:text-[#007bff] text-gray-600 text-sm font-bold block'>HACCP CERT.</a>
                </li>
                <li class='border-b py-1.5 '><a href='/ISO-Certification/AS-9100-cert'
                    class='hover:text-[#007bff] text-gray-600 text-sm font-bold block'>AS 9100 CERT.</a>
                </li>
              </ul>

            </li>
            <!-- ISO CERTIFICATION END -->

            <div class="w-px h-5 bg-black/20"></div>

            <a href="tel:9425318625" title=""
              class="inline-flex items-center bg-black text-white justify-center px-5 py-2.5 text-base font-semibold border-2 border-black hover:bg-white hover:text-black transition-all duration-700 focus:bg-black focus:text-white"><i
                class="fa-solid fa-phone-volume"></i></a>

            <a href="#" title=""
              class="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-700 focus:bg-black focus:text-white"
              role="button"> <i class="fa-regular fa-envelope"></i></a>
          </div>
        </div>
      </div>
    </header>


  </div>

</template>

<script>
export default {
  data() {
    return {


      menus: [
        { title: "Home", icon: "", link: "/", },
        // { title: "About", icon: "", link: "/about", },
        // { title: "Trademark", icon: "", link: "/trademark", },
        // { title: "Copyright", icon: "", link: "/copyright", },
        // { title: "Patent", icon: "", link: "/patent", },
        // { title: "Design", icon: "", link: "/design", },
        // { title: "ISO Certification", icon: "", link: "/certification", },
        { title: "Training & Dev", icon: "", link: "/training_dev", },
        { title: "Blog ", icon: "", link: "#section1", },
        { title: "Contact", icon: "", link: "/contact", },

      ]
    }
  },
  methods: {

  },
}

</script>