const { createApp } = Vue
    createApp({
    data() {
        return {
        movies:[],
        apiURL : "https://zhshakib.github.io/movie-directory/API/movies.json",
        }
    },
    methods : {
        async getData(){
            const res = await fetch(this.apiURL);
            const finalRes = await res.json();
            this.movies = finalRes;
            console.log(finalRes);
        }
    },
    mounted(){
        this.getData();
    }
}).mount('#app')