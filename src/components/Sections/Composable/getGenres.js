import axios from 'axios';
import { ref } from 'vue';

const getGenres= (()=>{
    const genres=ref([]);

    const loadGenres=async ()=>{
        
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=0a8092df0dd587de9a553914274ae45c`)
        .then(res=>{
            res.data.genres.forEach(result=>{
                    genres.value.push(result)
            })
           
        })
        .catch(error=>console.log(error))
    }

    return{
        genres,
        loadGenres
    }
})

export default getGenres

