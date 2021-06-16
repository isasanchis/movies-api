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
        <button class="show-modal" @click="mostrarModal(filme)"><img :src="'https://image.tmdb.org/t/p/w220_and_h330_face' + filme.poster_path" class="image" /></button>
      </div>
    </main>

    <div class="modal-content" v-if="modalVisivel" @click="fecharModal">
      <div class="modal">
        <img :src="'https://image.tmdb.org/t/p/w220_and_h330_face' + filmeAExibir.poster_path" />
          <span class="modal-titulo">
            <h2> {{ filmeAExibir.title }} </h2>
            <p> {{ filmeAExibir.overview }} </p>
            <h4>Data de lançamento: {{ filmeAExibir.release_date }}</h4>
          </span>
        <span class="close" @click="fecharModal">&times;</span>
      </div>
    </div>

  </div>
</template>

<script>
import moviesMixin from './moviesMixin'

export default {
  mixins: [ moviesMixin ],
  data() {
    return {
      filmes: [],
      filmeAExibir: { title: '', overview: '', poster_path: '', release_date: ''},
      modalVisivel: false,
    }
  },
  methods: {
    mostrarModal(filme) {
      this.filmeAExibir = filme;
      this.filmeAExibir.release_date = new Date(this.filmeAExibir.release_date).toLocaleDateString("pt-BR")
      this.modalVisivel = true;
    },
    fecharModal() {
      this.modalVisivel = false;
    },
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

.main {
  margin: 0px 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.movies-show {
  padding: 30px 20px;
  text-align: center;
  color: black;
  font-weight: 300;
  display: flex;
}

.image {
  height: 16rem;
  width: 11rem;
  border-radius: 1%;
  margin: 0;
  padding: 0;
  transition: 0.3s ease;
}
.image:hover {
  opacity: 0.5;
}

.show-modal {
  border: none;
  width: 11rem;
  padding: 0;
  height: 16rem;
}

.show-modal:hover {
  cursor: pointer;
  color: black;
}

.modal-content {
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
  overflow: hidden;
}

.modal {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
  display: flex;
  justify-content: space-between;
}
.modal-titulo {
  padding: 10px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

</style>
