<template>
  <div id="app" @click="fecharPelaJanela">
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
        <img :src="'https://image.tmdb.org/t/p/w220_and_h330_face' + filme.poster_path" class="image"/>
        <button id="btnModal" @click="abrirModal">Ver mais</button>

        <div id="myModal" class="myModal">
          <div class="modal-content">
            <div class="modal-header">
              <span class="close" @click="fecharModal">&times;</span>
              <h2>{{ filme.title }}</h2>
            </div>
            <div class="modal-body">
              <p>{{ filme.overview }}</p>
            </div>
          </div>
        </div>

      </div>
    </main>

  </div>
</template>

<script>
import moviesMixin from './moviesMixin'

export default {
  mixins: [ moviesMixin ],
  data() {
    return {
      filmes: [],
    }
  },
  methods: {
    abrirModal() {
        document.getElementById("myModal").style.display = "block";
    },
    fecharModal() {
        document.getElementById("myModal").style.display = "none";
    },
     fecharPelaJanela(e) {
        if (e.target == document.getElementById("myModal")) {
          document.getElementById("myModal").style.display = "none";
      }
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

.movies-show {
  padding: 10px;
  text-align: center;
  color: black;
  font-weight: 300;
  display: flex;
}

.image {
  border-radius: 1%;
  margin: 0;
  padding: 0;
  position: relative;
  transition: 0.3s ease;
}
.image:hover {
  opacity: 0.5;
}
#btnModal {
  position: absolute;
}

.myModal {
  display: none;
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
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
