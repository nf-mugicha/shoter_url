// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// ルートコンポーネントをインポートする
import App from './components/App'
// ルーティングの定義をインポートする
import router from './router'
// firebase構成をインポートする
import './plugins/firebase'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
