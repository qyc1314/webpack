import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router);

let exampleRoute = [];
if (process.env.NODE_ENV === 'development') {
  // demo页，只在dev上展示;用于展示一些公共组件使用方法
  exampleRoute = []
}

export default new Router({
  routes: [
    ...exampleRoute,
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
