export default {
    data() {
        return {
            filmes: null,
        }
    },
    methods: {
        obterFilmes() {
            this.$http('https://api.themoviedb.org/3/search/movie', {params: {api_key: 'c9ce16d5e7d7b65151b3d21cb94f543d', query: this.nomeFilme()}} ).then(res => {
            this.filmes = res.data
            console.log(res.data);
            });
        },
        nomeFilme() {
            let inputValue = document.querySelector('.input');
            return inputValue.value;
        },
    }
}