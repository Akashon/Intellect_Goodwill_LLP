<!-- src/components/TeamMember.vue -->
<template>
    <div class="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
      <img :src="image" alt="Profile Picture" class="w-24 h-24 rounded-full object-cover" />
      <h2 class="mt-4 text-lg font-semibold">{{ name }}</h2>
      <p class="text-gray-600">{{ title }}</p>
      <p class="mt-2 text-center text-gray-600">{{ description }}</p>
      <div class="flex mt-4 space-x-2">
        <a v-for="icon in icons" :key="icon.class" :href="icon.link" class="text-blue-500 hover:text-blue-700">
          <i :class="icon.class"></i>
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TeamMember',
    props: {
      image: String,
      name: String,
      title: String,
      description: String,
      icons: Array
    }
  }
  </script>
  