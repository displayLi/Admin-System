// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import We from './components/We'
import Add from './components/Add'
import Information from './components/Information'
import Edit from './components/edit'
import VueRouter from 'vue-router'
import axios from 'axios'


Vue.config.productionTip = false
Vue.use(VueRouter)

axios.defaults.baseURL = 'http://localhost:3000'

const router = new VueRouter({
  routes: [
    { path: '/', component: App },
    { path: '/We', component:We},
    { path: '/Add', component:Add},
    { path: '/Info/:id', component:Information},
    { path: '/edit/:id', component:Edit}
  ],
  mode: 'history',
})

/* eslint-disable no-new */
const app = new Vue({
  router,
  template: `
		<div>
			<nav class="navbar navbar-inverse">
		      <div class="container">
		        <div class="navbar-header">
		          <button type="button" class="navbar-toggle " data-toggle="collapse" data-target="#navbar">
		            <span class="sr-only">Toggle navigation</span>
		            <span class="icon-bar"></span>
		            <span class="icon-bar"></span>
		            <span class="icon-bar"></span>
		          </button>
		          <span class="navbar-brand"><router-link to="/">客户后台管理系统</router-link></span>
		        </div>
		        <div id="navbar" class="collapse navbar-collapse">
		          <ul class="nav navbar-nav">
		            <li><router-link to='/'>主页</router-link></li>
		            <li><router-link to='/We'>关于我们</router-link></li>
		          </ul>
		          <ul class="navbar-right nav navbar-nav">
					<li><router-link to='/Add'>添加用户</router-link></li>
		          </ul>
		        </div>
		      </div>
		    </nav>
		   <router-view></router-view>
		</div>
  	`,
}).$mount('#app');
