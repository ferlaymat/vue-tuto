<script setup lang="ts">

</script>

<template>
  <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/kanban">Kanban</router-link>
      <router-link to="/kanban-api">Kanban API</router-link>
    </nav>
   <router-view />
</template>

<style scoped>
nav {
    background: #2c3e50;
    padding: 1rem 2rem;
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  nav a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background 0.3s;
  }

  nav a:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  nav a.router-link-active {
    background: #42b983;
    font-weight: bold;
  }
</style>
