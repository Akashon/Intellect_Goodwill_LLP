<template>
    <div class=" text-[#333] bg-[#021D39]">
        <div class="w-full bg-center bg-cover h-96"
            style="background-image: url(https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);">
            <div class="flex items-center justify-center w-full h-full bg-[#0D1057] bg-opacity-50">
                <div class="max-w-7xl">
                    <h1 class="text-4xl mt-16 font-bold text-left text-white"><span class="text- text-5xl"> Publication
                    </span></h1>
                <p class="text-slate-400 text-start mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Explicabo itaque facilis id nihil
                    exercitationem architecto, amet obcaecati cum mollitia quasi recusandae cumque officiis maiores
                    magni aliquid nesciunt, neque in voluptate?</p>
                </div>
            </div>
        </div>
        
        <div class="max-w-screen-xl mx-auto py-0 my-12 px-6 lg:px-8">
            <carousel class="" :items-to-show="2.2" :autoplay="2000" :transition="2000" :wrap-around="true"
                :breakpoints="breakpoints">
                <slide v-for="(blog, index) in blogs" :key="index">
                    <div class=" carousel__item shadow-md rounded-lg max-w-xl h-full ">
                        <a href="#">
                            <img class="rounded-t-lg" :src="blog.image" alt="" />
                        </a>
                    </div>
                </slide>
            </carousel>
        </div>
    </div>
    <!-- LATEST BLOGS END -->

</template>

<script>
// import AOS from "aos";
// import "aos/dist/aos.css";

export default {
    data() {
        return {
            breakpoints: {
                375: { itemsToShow: 1, snapAlign: "center", },
                // 700px and up
                700: { itemsToShow: 2, snapAlign: "center", },
                // 1024 and up
                1024: { itemsToShow: 1.4, snapAlign: "start", },
            },


            blogs: [
                { image: "http://www.trademarkiso.com/wp-content/uploads/2016/10/05-Budik-sampada-jagat-5-oct-16-11.jpg", },
                { image: "http://www.trademarkiso.com/wp-content/uploads/2016/10/05-Budik-sampada-jagat-5-oct-16-2.jpg", },
                { image: "http://www.trademarkiso.com/wp-content/uploads/2016/10/05-Budik-sampada-jagat-5-oct-16-3.jpg", },
                { image: "http://www.trademarkiso.com/wp-content/uploads/2016/10/05-Budik-sampada-jagat-5-oct-16-4.jpg", },
                { image: "http://www.trademarkiso.com/wp-content/uploads/2016/10/05-Budik-sampada-jagat-5-oct-16-5.jpg", },
                { image: "http://www.trademarkiso.com/wp-content/uploads/2016/10/05-Budik-sampada-jagat-5-oct-16-6.jpg", },
                { image: "http://www.trademarkiso.com/wp-content/uploads/2016/10/05-Budik-sampada-jagat-5-oct-16-7.jpg", },
                { image: "http://www.trademarkiso.com/wp-content/uploads/2016/10/05-Budik-sampada-jagat-5-oct-16-8.jpg", },
                { image: "http://trademarkiso.com/wp-content/uploads/2015/04/proof-page-001.jpg", },
                { image: "http://www.trademarkiso.com/wp-content/uploads/2016/10/05-Budik-sampada-jagat-5-oct-16-4.jpg", },
                { image: "http://www.trademarkiso.com/wp-content/uploads/2016/10/05-Budik-sampada-jagat-5-oct-16-5.jpg", },
                { image: "http://www.trademarkiso.com/wp-content/uploads/2016/10/05-Budik-sampada-jagat-5-oct-16-6.jpg", },
            ],
        };
    },
    methods: {

    },
    mounted() {
        document.addEventListener("mousemove", this.updateCursorPosition);
        AOS.init();
    },
    beforeUnmount() {
        document.removeEventListener("mousemove", this.updateCursorPosition);
    },

};
</script>

<style>
.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
}
</style>
