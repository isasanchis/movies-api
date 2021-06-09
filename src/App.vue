<template>
  <div id="app">
    <header class="header">
      <div class="header-container">
        <h1>Movies Search</h1>
        <div class="searchbox">
          <input type="text" placeholder="Movies" class="input">
          <button @click="obterFilmes" class="btn_submit"><img src="https://www.pngkey.com/png/full/87-872187_lupa-search-icon-white-png.png" class="img_btn"></button>
        </div>
      </div>
    </header>

    <main class="main">
      <div class="movies-show" v-for="filme in filmes" :key="filme.id">
        <filme
        :titulo="filme.title"
        :descricao="filme.overview">
        </filme>
      </div>
    </main>
  </div>
</template>

<script>
import Filme from './components/Filme.vue'
import moviesApi from './services/moviesApi'
import moviesMixin from './moviesMixin'

export default {
  mixins: [ moviesMixin ],
  components: { Filme },
  data() {
    return {
      filmes: []
    }
  },
  created() {
    moviesApi.getAllMovies(movies => {
      this.filmes = movies.data.data.results;
    });
  }
}
</script>

<style lang="scss">

#app {
  font-family: 'Lato', sans-serif;
  color: black;
}

body {
  padding: 0;
  margin: 0;
}

h1 {
  padding: 0;
  margin: 0;
  color: white;
}

.header {
  background-color: #2c3e50;
  height: 250px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.header-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.searchbox {
  margin-top: 25px;
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
}

.input {
  width: 350px;
  margin: 0;
  border: none;
  padding: 5px;
  height: 28px;
}
.input:focus {
  outline: none;
}
input:focus::-webkit-input-placeholder {
  opacity: 0;
}

.btn_submit {
  background: #5c7fa3;
  border: none;
  padding: 5px;
  margin: 0;
  margin-left: -21px;
  cursor: pointer;
  height: 38px;
}

.img_btn {
  height: 1.1rem;
}

.movies-show {
  text-align: center;
  color: black;
  font-weight: 300;
}

</style>
