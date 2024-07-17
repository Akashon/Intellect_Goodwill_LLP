<template>
    <div class="bg-[#021D39] text-[#333] bg-[#021D39] ">
        <div class="w-full bg-center bg-cover h-96"
            style="background-image: url(https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);">
            <div class="flex items-center justify-center w-full h-full bg-[#0D1057] bg-opacity-50">
                <div class="max-w-7xl">
                    <h1 class="text-4xl mt-16 font-bold text-left text-white"><span class="text- text-5xl"> Gallery
                    </span></h1>
                <!-- <p class="text-slate-400 text-start mt-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Explicabo itaque facilis id nihil
                    exercitationem architecto, amet obcaecati cum mollitia quasi recusandae cumque officiis maiores
                    magni aliquid nesciunt, neque in voluptate?
                </p> -->
                </div>
            </div>
        </div>
        <div class="max-w-screen-xl mx-auto py-0 mb-12 px-6 lg:px-8">
        <div class="grid gap-4 my-12">
            <Carousel id="gallery"
                class="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[680px] main-carousel"
                :items-to-show="1" :wrap-around="false" v-model="currentSlide">
                <Slide v-for="(image, index) in images" :key="index">
                    <div class="carousel__item">
                        <img :src="image" style="height: 38rem;" alt="" class="w-full object-cover " />
                    </div>
                </Slide>
            </Carousel>

            <Carousel id="thumbnails" :items-to-show="6" :wrap-around="true" v-model="currentSlide" ref="carousel"
                class="thumbnail-carousel mt-4">
                <Slide v-for="(image, index) in images" :key="index">
                    <div class="carousel__item cursor-pointer" @click="slideTo(index)">
                        <img :src="image" alt=""
                            class="object-cover object-center h-32 max-w-full rounded-lg cursor-pointer" />
                    </div>
                </Slide>
            </Carousel>
        </div>
    </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            currentSlide: 0,
            images: [
                'http://www.trademarkiso.com/wp-content/gallery/title/Adv.Rakesh-Soni-certificate.jpg',
                'http://www.trademarkiso.com/wp-content/uploads/2020/03/raigarh1.jpeg',
                'http://www.trademarkiso.com/wp-content/uploads/2020/03/IMG_20200310_203057.jpg',
                'http://www.trademarkiso.com/wp-content/uploads/2020/03/IMG_4992.jpg',
                'http://www.trademarkiso.com/wp-content/gallery/title/thumbs/thumbs_3.jpg',
                'http://www.trademarkiso.com/wp-content/gallery/title/thumbs/thumbs_4.jpg',
                'http://www.trademarkiso.com/wp-content/gallery/title/thumbs/thumbs_8.jpg',
                'http://www.trademarkiso.com/wp-content/gallery/title/thumbs/thumbs_11.jpg',
                'http://www.trademarkiso.com/wp-content/gallery/title/thumbs/thumbs_11.jpg',
                'http://www.trademarkiso.com/wp-content/gallery/title/thumbs/thumbs_12.jpg',
                'http://www.trademarkiso.com/wp-content/gallery/title/thumbs/thumbs_13.jpg',
                'http://www.trademarkiso.com/wp-content/gallery/title/thumbs/thumbs_14.jpg',
                'http://www.trademarkiso.com/wp-content/gallery/title/thumbs/thumbs_17.jpg',

            ],
        }
    },
    methods: {
        slideTo(val) {
            this.currentSlide = val;
        },
    }
}
</script>

<style >
/* .carousel__item {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
} */

/* .carousel__item img {
    @apply w-full h-full object-cover;
}

.thumbnail-carousel .carousel__item {
    @apply cursor-pointer;
}

.thumbnail-carousel .carousel__item img {
    @apply w-full h-16 object-cover border-2 border-gray-300;
}

.main-carousel .carousel__item img {
    @apply w-full h-full object-cover;
} */
</style>
