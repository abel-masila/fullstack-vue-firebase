<template>
  <div id="app">
    <Navigation />
    <router-view class="container" :user="user" />
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
  mounted() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user.email
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
