import axios from 'axios';
import { ref } from 'vue';

const getPopularMovies=()=>{
        const popularMovies = ref([]);
        const loading = ref(false);

         const loadPopularMovies = async()=>{
            loading.value =true;

            axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0a8092df0dd587de9a553914274ae45c`)
                .then(res=>{
                    res.data.results.forEach(result=>{
                            popularMovies.value.push(result)
                    })
                 
                    loading.value=false
                  
                })
                .catch(error=>console.log(error))

         }

        return {
            popularMovies,
            loading,
            loadPopularMovies
        }



}

  export default getPopularMovies;
  