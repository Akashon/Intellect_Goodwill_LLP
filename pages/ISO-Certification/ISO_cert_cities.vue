<template>
    <div class="w-full">
        <div class="w-full bg-center bg-cover h-96" style="
        background-image: url(https://keystoneacademic-res.cloudinary.com/image/upload/element/73/73265_shutterstock_618460232.jpg);

      ">
      <!-- https://www.trademark.net.ph/wp-content/uploads/2022/08/shutterstock_535112449-scaled.jpg -->
            <div class="flex items-center justify-center w-full h-full bg-[#0D1057] bg-opacity-50">
                <div class="max-w-7xl">
                    <h1 class=" mt-16 font-bold text-left text-white">
                        <span class="text-3xl lg:text-5xl">ISO CERTIFICATION CITIES</span>
                    </h1>
                    <!-- <p class="text-slate-400 text-start mt-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                        itaque facilis id nihil exercitationem architecto, amet obcaecati
                        cum mollitia quasi recusandae cumque officiis maiores magni aliquid
                        nesciunt, neque in voluptate?
                    </p> -->
                </div>
            </div>
        </div>
        <div class="max-w-screen-xl mx-auto">
            <section id="faq" class="container relative mx-auto py-12 px-2">
                <h1 class="text-4xl font-bold">SEARCH ISO CERTIFICATION PROCESS CITIES</h1>
                <label
                    class="mx-auto mt-4 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border border-gray-400 py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-[#021D39]"
                    for="search-bar">
                    <input id="search-bar" placeholder="your keyword here" v-model="tradRegCity"
                        class="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white" />
                    <button
                        class="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
                        <div class="relative">
                            <div
                                class="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                            </div>
                            <div @click="fetchLocationRules" class="flex items-center transition-all opacity-1 valid:">
                                <span 
                                    class="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                                    Search
                                </span>
                            </div>
                        </div>
                    </button>
                </label>
                <div class="my-6">
                    <div
                        class="rounded-t-2xl bg-[#021D39] w-full cursor-pointer select-none border-2 border-gray-600/30 px-4 py-4 text-gray-100 transition duration-300 hover:border-[#021D39] hover:text-white">
                        <h4 class="text-lg font-medium"></h4>
                    </div>
                    <div
                        class="inline-flex w-full rounded-b-2xl border-x-2 border-b-2 border-dashed border-gray-600/30 bg-blue-100/50 px-4 py-4 text-gray-600">
                        <div v-if="rules.length" class="p-4">
                            <h2 class="text-2xl font-bold mb-2">
                                Rules for {{ tradRegCity }}
                            </h2>
                            <ul class="list-disc pl-5">
                                <li v-for="(rule, index) in rules" :key="index">{{ rule }}</li>
                            </ul>
                        </div>
                        <div v-else class="p-4 ">
                            <p class="text-gray-700">
                                No rules found for the specified location.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
        return {
            tradRegCity: "",
            rules: [],
        };
    },
    methods: {
        async fetchLocationRules() {
            if (this.tradRegCity.trim()) {
                try {
                    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.tradRegCity}`);

                    this.rules = response.data.map((post) => post.title);
                    console.log(response.data);
                } catch (error) {
                    console.error("Error fetching location rules:", error);
                    this.rules = [];
                }
            } else {
                this.rules = [];
            }
        },
    },
};
</script>
