<template>
    <div class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-3 flex justify-between items-center">
        <div class="text-xl font-bold">Logo</div>
        <button @click="toggleMenu" class="lg:hidden">
          <i class="fa fa-bars text-xl"></i>
        </button>
        <nav :class="{'hidden': !menuOpen, 'block': menuOpen}" class="lg:flex lg:items-center lg:space-x-4">
          <ul class="lg:flex lg:space-x-4">
            <li class="group relative list-none">
              <a href="javascript:void(0)" class="hover:text-blue-600 text-gray-600 text-sm font-bold block">
                Copyrights
                <i class="fa-solid fa-chevron-down ml-1 inline-block" width="16px" height="16px"></i>
              </a>
              <ul class="lg:absolute shadow-lg bg-white space-y-3 lg:top-10 left-0 lg:left-0 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                <li class="border-b py-1.5">
                  <a href="/copyright/cr-reg-process" class="hover:text-blue-600 text-gray-600 text-sm font-bold block">
                    COPYRIGHT REG. PROCESS
                  </a>
                </li>
                <li class="group relative list-none">
                  <a href="javascript:void(0)" class="hover:text-blue-600 text-gray-600 text-sm font-bold block">
                    Rocky
                    <i class="fa-solid fa-chevron-down ml-1 inline-block" width="16px" height="16px"></i>
                  </a>
                  <ul class="lg:absolute shadow-lg bg-white space-y-3 lg:top-10 left-0 lg:left-0 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                    <li class="border-b py-1.5">
                      <a href="/copyright/cr-reg-process" class="hover:text-blue-600 text-gray-600 text-sm font-bold block">
                        RockyOne REG. PROCESS
                      </a>
                    </li>
                    <li class="border-b py-1.5">
                      <a href="/trademark/trademark-reg-cites" class="hover:text-blue-600 text-gray-600 text-sm font-bold block">
                        RockyTwo REG. CITIES
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="border-b py-1.5">
                  <a href="/trademark/trademark-reg-cites" class="hover:text-blue-600 text-gray-600 text-sm font-bold block">
                    COPYRIGHT REG. CITIES
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DropdownMenu',
    data() {
      return {
        menuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here if necessary */
  </style>
  