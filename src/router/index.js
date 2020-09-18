import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Meetings from '../views/Meetings.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Checkin from './../views/Checkin.vue'
import Attendees from './../views/Attendees.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/meetings',
    name: 'Meetings',
    component: Meetings
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/checkin/:userID/:meetingID',
    name: 'Checkin',
    component: Checkin
  },

  {
    path: '/attendees/:userID/:meetingID',
    name: 'Attendees',
    component: Attendees
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
