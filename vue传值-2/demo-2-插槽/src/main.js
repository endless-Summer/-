import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Vue.directive('color', {
//   color: {
//     bind(el, binding) {
//       el.style.color = binding.value;
//     },
//     update(el, binding) {
//       el.style.color = binding.value;
//     }
//   },
// })
Vue.directive('color', function (el, binding) {
  el.style.color = binding.value
}
)
new Vue({
  render: h => h(App),
}).$mount('#app')
