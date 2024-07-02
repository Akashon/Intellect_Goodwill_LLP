<template>
  <transition name="fade">
    <div v-if="showPopup" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50 overflow-auto">
      <div class="bg-white p-6 rounded shadow-lg sm:mx-12 md:mx-12 lg:mx-auto max-w-screen-lg px-4 sm:px-6 md:px-12 lg:px-28 text-center py-8 sm:py-10 md:py-12 sm:w-max-w-screen-sm ">
        <h2 class="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-[#021D39] to-blue-400 bg-clip-text text-transparent" style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">DISCLAIMER</h2>
        <hr class="h-px my-6 bg-blue-900 border-0">
        <h3 class="lg:mb-4 mb-2 lg:text-sm text-xs text-start px-2 ">The Bar Council of India does not permit advertisement or solicitation by advocates. By accessing this website (<a href="/" class="text-blue-500">www.intellectgoodwill.com</a>) i.e. the website of Intellect Goodwill LLP (“Firm”), you acknowledge and confirm that you are seeking information relating to Intellect Goodwill LLP of your own accord and that there has been no form of solicitation, advertisement or inducement by the Firm or its members.</h3>
        <h3 class="lg:my-4 mb-2 lg:text-sm text-xs text-start px-2">By accessing / using this website, including any part of the web page(s) located on this website, you expressly represent that you have read, understood and agreed to be bound by this Disclaimer and also the Terms, Privacy Policy and Cookie Policy. The content of this website is for informational purposes only and should not be interpreted as soliciting or advertisement. The content on this website is provided by Firm in good faith on “as is” and “as available” basis for general information purposes only. The Firm shall not be responsible for any consequences or any action taken by relying on the content of this website. We disclaim any liability arising from information or materials contained on this site. The content of this website should not be construed as legal advice and relied on wholly at your own risk and subject to your own assessment and analysis.</h3>
        <h3 class="lg:my-6 mb-3 lg:text-sm text-xs text-start px-2">This website and its contents are intellectual property of the Firm.</h3>
        <button @click="closePopup" class="relative inline-block lg:px-10 px-4 py-1 lg:py-2  font-medium group text-center">
          <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#DFEDFE] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span class="absolute inset-0 w-full h-full bg-white border-2 border-[#021D39] group-hover:bg-[#021D39]"></span>
          <span class="relative text-[#021D39] group-hover:text-white">I AGREE</span>
        </button>
        <div class="mt-4">
          <NuxtLink to="/" class="underline text-blue-500 lg:text-sm text-xs">No thanks</NuxtLink>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      showPopup: false,
    };
  },
  mounted() {
    this.checkTime();
  },
  methods: {
    checkTime() {
      const currentHour = new Date().getHours();
      // Set the open hours (e.g., 9 AM to 5 PM)
      const openHour = 9;
      const closeHour = 17;
      if (currentHour >= openHour && currentHour < closeHour) {
        this.showPopup = true;
      }
    },
    closePopup() {
      this.showPopup = false;
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
