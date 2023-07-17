<template>
<div class="col-lg-4 col-md-6 col-sm-6">
    <div class="product__item">
        <div class="product__item__pic set-bg" :data-setbg="movies.image_path">
            <img :src="`https://image.tmdb.org/t/p/w780/${movies.poster_path}`" alt="">
            <div class="ep">{{ movies.vote_average }}</div>
            <div class="comment"><i class="fa fa-users"></i> {{ Math.ceil(movies.popularity) }}</div>
            <div class="view"><i class="fa fa-thumbs-o-up"></i> {{ movies.vote_count }}</div>
        </div>
        <div class="product__item__text">
            <ul>
                <li class="ml-1 mt-2" 
                v-for="genre in genres" 
                :key="genre.id">
                {{ genre.name }}
            </li>

            </ul>
            <h5><a href="#">{{ movies.original_title }}</a></h5>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        movies: Object,
        genres: Array
    },

}
</script>

<style></style>
