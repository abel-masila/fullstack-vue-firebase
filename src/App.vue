<template>
  <div id="app">
    <Navigation :user="user" @logout="logout" />
    <router-view class="container" :user="user" @logout="logout" />
  </div>
</template>
<script>
import Firebase from 'firebase/app'
import 'firebase/auth'
import Navigation from '@/components/Navigation.vue'

import db from './db'
export default {
  name: 'app',
  components: {
    Navigation
  },
  data: function() {
    return {
      user: null
    }
  },
  methods: {
    logout: function() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.user = null
          this.$router.push('/login')
        })
    }
  },
  mounted() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user
      }
    })
    db.collection('users')
      .doc('Ekfjq1Yk4qDSdPkrpVgh')
      .get()
      .then(() => {
        //this.user = snapShot.data().name
      })
  }
}
</script>
<style lang="scss">
$primary: #05b2dd;
@import 'node_modules/bootstrap/scss/bootstrap';
</style>
