<template>
 
        <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" 
                :data-setbg="movies.image_path" 
                >
                <img :src="movies.image_path" alt="">
                    <div class="ep">18 / 18</div>
                    <div class="comment"><i class="fa fa-comments"></i> 11</div>
                    <div class="view"><i class="fa fa-eye"></i> 9141</div>
                </div>
                <div class="product__item__text">
                    <ul>
                        <li>Active</li>
                        <li>Movie</li>
                    </ul>
                    <h5><a href="#">{{ movies.name }}</a></h5>
                </div>
            </div>
        </div>
     
    
</template>

<script>
export default {
    props:{
        movies:Object
    }
}
</script>

<style></style>