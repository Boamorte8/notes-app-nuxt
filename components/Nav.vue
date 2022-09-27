<script setup lang="ts">
const { isLoggedIn, signOut } = useAuth();

const onLogout = () => {
  signOut();
}
</script>

<template>
  <nav class="nav">
    <ul class="items">
      <li class="item">
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li class="item">
        <NuxtLink to="/profile">Profile</NuxtLink>
      </li>
      <li v-if="isLoggedIn()" class="item logout" @click="onLogout">
        Logout
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
  background-color: black;
  height: 5rem;
}

.items {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 3rem;
}

.item {
  margin-right: 2rem;
}

.logout {
  margin-left: auto;
  cursor: pointer;
}
</style>