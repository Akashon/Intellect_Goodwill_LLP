<template>
  <div class=" text-[#333] bg-white">
    <div class="w-full bg-center bg-cover h-96"
            style="background-image: url(https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);">
            <div class="flex items-center justify-center w-full h-full bg-[#0D1057] bg-opacity-50">
                <div class="max-w-7xl">
                    <h1 class="text-4xl mt-16 font-bold text-left text-white"><span class="text- text-5xl"> Professional Team Meet Our
                    </span></h1>
                <p class="text-slate-400 text-start mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Explicabo itaque facilis id nihil
                    exercitationem architecto, amet obcaecati cum mollitia quasi recusandae cumque officiis maiores
                    magni aliquid nesciunt, neque in voluptate?</p>
                </div>
            </div>
        </div>
    <div class="max-w-5xl max-md:max-w-xl mx-auto my-12">
      <div class="space-y-12">
        <div class="flex flex-col md:flex-row items-center" data-aos="fade-up-left" data-aos-duration="2000">
          <img
            src="https://images.unsplash.com/photo-1640951613773-54706e06851d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8"
            alt="Will Patton"
            class="w-32 h-32 md:w-64 md:h-48 rounded-full object-cover mb-4 md:mb-0 md:mr-8"
          />
          <div>
            <h2 class="text-2xl font-bold">D. P. Soni</h2>
            <p class="text-gray-600">Attorney & Renowned Advocate</p>
            <p class="mt-4 text-gray-500">
              D.P. Soni is an industrial and labour lawyer, M.A. (Socio), LL.B.,
              having 45 years of Experience in different industries which
              includes 30 years of experience in Grasim, Nagda (Aditya Birla
              Group). D. P. Soni is currently engaged in providing consultancy
              services in the matters of industrial and labour disputes.
            </p>
          </div>
        </div>
        <hr />

        <div class="flex flex-col md:flex-row items-center" data-aos="fade-right" data-aos-duration="2000">
          <div>
            <h2 class="text-2xl font-bold">Rakesh Soni</h2>
            <p class="text-gray-600">
              Advocate and Govt. Authorized Attorney for IPR
            </p>
            <p class="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet, fastidii platonem ei vis, nam at omnis
              vivendo necessitatibus, ad alienum mentitum qui.
            </p>
          </div>
          <img
            src="http://www.trademarkiso.com/wp-content/uploads/2019/05/rakesh-soni.png"
            alt="Miles Robbins"
            class="w-32 h-32 md:w-64 md:h-48 rounded-full object-cover mb-4 md:mb-0 md:ml-8"
          />
        </div>
        <hr />

        <div class="flex flex-col md:flex-row items-center" data-aos="fade-left" data-aos-duration="2000"> 
          <img
            src="https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8"
            alt="Chris Jane"
            class="w-32 h-32 md:w-64 md:h-48 rounded-full object-cover mb-4 md:mb-0 md:mr-8"
          />
          <div>
            <h2 class="text-2xl font-bold">Kartikey Johary</h2>
            <!-- <p class="text-gray-600">Marketer</p> -->
            <p class="mt-4 text-gray-500">
              Kartikey Johary is a Law Graduate and an MBA. He specializes in
              corporate laws, PG Diploma in Banking & Finance, Diploma in Export
              Management. He started his legal career in 2009 and has made
              regular appearances before Hon’ble Sessions and High Court of
              Rajasthan. He is widely exposed to various industrial clients of
              Real estate, Financial Institutions etc. which involves ample of
              experience in legal compliance, handling criminal & civil matters
              & other departmental liaison matters, IT Act and Cyber laws. He is
              a regular appearing council in Revenue Board Ajmer, Rajasthan High
              Court & other Sessions Courts, etc.
            </p>
          </div>
        </div>
        <hr />

        <div class="flex flex-col md:flex-row items-center" data-aos="fade-right" data-aos-duration="2000">
          <div>
            <h2 class="text-2xl font-bold">Nisha Soni</h2>
            <p class="text-gray-600"></p>
            <p class="mt-4 text-gray-500">
              Mrs. Nisha Soni is a B. Com., LL.B. and is an expert of Family Law
              and IPR law. She also looks after trademark and copyright
              registration services in the states of Madhya Pradesh and
              Chhattisgarh.
            </p>
          </div>
          <img
            src="http://www.trademarkiso.com/wp-content/uploads/2019/05/nisha.png"
            alt="Miles Robbins"
            class="w-32 h-32 md:w-64 md:h-48 rounded-full object-cover mb-4 md:mb-0 md:ml-8"
          />
        </div>
        <hr />
        
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
export default {
    name: 'MouseCircles',

    data() {
        return {

        }
    },
    mounted() {
        document.addEventListener('mousemove', this.updateCursorPosition);
        AOS.init();
    },
}
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
