// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true }
app:{
  head:{
    link:[
      {
        rel: "stylesheet" ,
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" 
      }
    ],
    script:[
      {
        src:"https://cdn.tailwindcss.com"
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js'
      }
    ]
  }
},
modules: ["vue3-carousel-nuxt"]

})
