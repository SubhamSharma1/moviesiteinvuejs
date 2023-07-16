<template>
   <!-- Product Section Begin -->
   <section class="product spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="trending__product">
                        <SectionHeader title="Trending Movies"/>
                        <div class="row">
                        <SingleMovieVue v-for="movies in popularMovies" :key="movies.id" :movies="movies"/>
                        </div>
                    </div>

                    <div class="trending__product">
                        <SectionHeader title="Popular Movies"/>
                        <div class="row">
                        <SingleMovieVue v-for="movies in popularMovies" :key="movies.id" :movies="movies"/>
                        </div>                    </div>

                    <div class="trending__product">
                        <SectionHeader title="Action Movies"/>
                        <div class="row">
                        <SingleMovieVue v-for="movies in popularMovies" :key="movies.id" :movies="movies"/>
                        </div>                    </div>

                    <div class="trending__product">
                        <SectionHeader title="Random Movies"/>
                        <div class="row">
                        <SingleMovieVue v-for="movies in popularMovies" :key="movies.id" :movies="movies"/>
                        </div>                    </div>

                   
                </div>
                <div class="col-lg-4 col-md-6 col-sm-8">
                    <div class="product__sidebar">
                        <div class="product__sidebar__view">
                            <div class="section-title">
                                <h5>Top Views</h5>
                            </div>
                            <ul class="filter__controls">
                                <li class="active" data-filter="*">Day</li>
                                <li data-filter=".week">Week</li>
                                <li data-filter=".month">Month</li>
                                <li data-filter=".years">Years</li>
                            </ul>
                            <div class="filter__gallery">
                                <div class="product__sidebar__view__item set-bg mix day years"
                                data-setbg="img/sidebar/tv-1.jpg">
                                <div class="ep">18 / ?</div>
                                <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                <h5><a href="#">Boruto: Naruto next generations</a></h5>
                            </div>
                            <div class="product__sidebar__view__item set-bg mix month week"
                            data-setbg="img/sidebar/tv-2.jpg">
                            <div class="ep">18 / ?</div>
                            <div class="view"><i class="fa fa-eye"></i> 9141</div>
                            <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                        </div>
                        <div class="product__sidebar__view__item set-bg mix week years"
                        data-setbg="img/sidebar/tv-3.jpg">
                        <div class="ep">18 / ?</div>
                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                        <h5><a href="#">Sword art online alicization war of underworld</a></h5>
                    </div>
                    <div class="product__sidebar__view__item set-bg mix years month"
                    data-setbg="img/sidebar/tv-4.jpg">
                    <div class="ep">18 / ?</div>
                    <div class="view"><i class="fa fa-eye"></i> 9141</div>
                    <h5><a href="#">Fate/stay night: Heaven's Feel I. presage flower</a></h5>
                </div>
                <div class="product__sidebar__view__item set-bg mix day"
                data-setbg="img/sidebar/tv-5.jpg">
                <div class="ep">18 / ?</div>
                <div class="view"><i class="fa fa-eye"></i> 9141</div>
                <h5><a href="#">Fate stay night unlimited blade works</a></h5>
            </div>
        </div>
    </div>
    <div class="product__sidebar__comment">
        <div class="section-title">
            <h5>New Comment</h5>
        </div>
        <div class="product__sidebar__comment__item">
            <div class="product__sidebar__comment__item__pic">
                <img src="img/sidebar/comment-1.jpg" alt="">
            </div>
            <div class="product__sidebar__comment__item__text">
                <ul>
                    <li>Active</li>
                    <li>Movie</li>
                </ul>
                <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                <span><i class="fa fa-eye"></i> 19.141 Viewes</span>
            </div>
        </div>
        <div class="product__sidebar__comment__item">
            <div class="product__sidebar__comment__item__pic">
                <img src="img/sidebar/comment-2.jpg" alt="">
            </div>
            <div class="product__sidebar__comment__item__text">
                <ul>
                    <li>Active</li>
                    <li>Movie</li>
                </ul>
                <h5><a href="#">Shirogane Tamashii hen Kouhan sen</a></h5>
                <span><i class="fa fa-eye"></i> 19.141 Viewes</span>
            </div>
        </div>
        <div class="product__sidebar__comment__item">
            <div class="product__sidebar__comment__item__pic">
                <img src="img/sidebar/comment-3.jpg" alt="">
            </div>
            <div class="product__sidebar__comment__item__text">
                <ul>
                    <li>Active</li>
                    <li>Movie</li>
                </ul>
                <h5><a href="#">Kizumonogatari III: Reiket su-hen</a></h5>
                <span><i class="fa fa-eye"></i> 19.141 Viewes</span>
            </div>
        </div>
        <div class="product__sidebar__comment__item">
            <div class="product__sidebar__comment__item__pic">
                <img src="img/sidebar/comment-4.jpg" alt="">
            </div>
            <div class="product__sidebar__comment__item__text">
                <ul>
                    <li>Active</li>
                    <li>Movie</li>
                </ul>
                <h5><a href="#">Monogatari Series: Second Season</a></h5>
                <span><i class="fa fa-eye"></i> 19.141 Viewes</span>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
</section>
<!-- Product Section End -->
</template>

<script>
import SectionHeader from '../Units/SectionHeader.vue';
import SingleMovieVue from '../Units/SingleMovie.vue';
export default {
   data(){
    return{
        popularMovies:[
            {
                id:1,
                name:"The Seven Deadly Sins: Wrath of the Gods",
                image_path:"../src/assets/img/trending/trend-1.jpg"
            },
            {
                id:2,
                name:"Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien",
                image_path:"../src/assets/img/trending/trend-2.jpg"
            },
            {
                id:3,
                name:"Shingeki no Kyojin Season 3 Part 2",
                image_path:"../src/assets/img/trending/trend-3.jpg"
            },
            {
                id:4,
                name:"Fullmetal Alchemist: Brotherhood",
                image_path:"../src/assets/img/trending/trend-4.jpg"
            },
            {
                id:5,
                name:"Shiratorizawa Gakuen Koukou",
                image_path:"../src/assets/img/trending/trend-5.jpg"
            },
            {
                id:6,
                name:"Code Geass: Hangyaku no Lelouch R2",
                image_path:"../src/assets/img/trending/trend-6.jpg"
            }
        ]
    }
   },
components:{
    SectionHeader,
SingleMovieVue

}
}
</script>

<style>

</style>