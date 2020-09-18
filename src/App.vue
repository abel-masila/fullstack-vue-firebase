<template>
  <div id="app">
    <Navigation :user="user" @logout="logout" />
    <router-view
      class="container"
      :user="user"
      @logout="logout"
      @addMeeting="addMeeting"
      :meetings="meetings"
    />
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
      user: null,
      meetings: []
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
    },
    addMeeting: function(payload) {
      db.collection('users')
        .doc(this.user.uid)
        .collection('meetings')
        .add({
          name: payload,
          createdAt: Firebase.firestore.FieldValue.serverTimestamp()
        })
    }
  },
  mounted() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user
        db.collection('users')
          .doc(this.user.uid)
          .collection('meetings')
          .onSnapshot(snapShot => {
            const snapData = []
            snapShot.forEach(doc => {
              snapData.push({
                id: doc.id,
                name: doc.data().name
              })
            })
            this.meetings = snapData
          })
      }
    })
  }
}
</script>
<style lang="scss">
$primary: #05b2dd;
@import 'node_modules/bootstrap/scss/bootstrap';
</style>
