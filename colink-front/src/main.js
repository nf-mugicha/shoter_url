import '@babel/polyfill'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './plugins/vuetify'
// ルートコンポーネントをインポートする
import App from './App'
// ルーティングの定義をインポートする
import router from './router'
// firebase構成をインポートする
import './plugins/firebase'
// 状態管理のストアをインポートする
import store from './store'
// CSRF対策
// import '../static/js/bootstrap'
// CSS有効化
import moment from 'vue-moment'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase'

Vue.use(moment)

Vue.config.productionTip = false

const createApp = async () => {
  await firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user)
      store.dispatch('auth/currentUser', user)
    } else {
      store.dispatch('auth/currentUser', null)
    }
  })
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    // 他のコンポーネトから、this.$routerやthis.$storeという方法でルーターや洗濯したパラメータの情報にアクセスできる
    'router': router,
    'store': store,
    components: { App },
    template: '<App/>'
  })
}
createApp()
