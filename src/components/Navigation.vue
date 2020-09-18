<template>
  <div>
    <nav class="navbar navbar-expand bg-primary navbar-dark">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Meeting Log</router-link>
        <div class="navbar-nav ml-auto">
          <router-link class="nav-item nav-link" to="/meetings"
            >Meetings</router-link
          >
          <router-link class="nav-item nav-link" to="/login">Login</router-link>
          <router-link class="nav-item nav-link" to="/register"
            >Register</router-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style></style>
