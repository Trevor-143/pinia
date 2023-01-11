<template>
  <main>
    <header>
      <img src="./assets/logo.svg" alt="pinia svg logo">
      <h1>{{ taskStore.name }}</h1>
    </header>
  </main>
</template>

<script>
  import { useTaskStore } from "./stores/TaskStore";

  export default {
    setup() {
      const taskStore = useTaskStore()
      return { taskStore }
    }
  }
</script>