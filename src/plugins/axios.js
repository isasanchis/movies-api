import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
    Vue.prototype.$http = axios.create ({
        baseURL: 'https://api.themoviedb.org/3/search/movie?api_key=c9ce16d5e7d7b65151b3d21cb94f543d&language=en-US&query=&page=1&include_adult=false',
        headers: {
            "Authorization": "c9ce16d5e7d7b65151b3d21cb94f543d"
        }
    }) 

    Vue.prototype.$http.interceptors.request.use(config => {
        return config
    }, error => Promise.reject(error))

    Vue.prototype.$http.interceptors.response.use(res => {
        return res
    }, error => Promise.reject(error))

    }
})