<script setup lang="ts">
const { getNotes } = useDB();

const notes = ref();

if (process.client) {
  notes.value = await getNotes();
}

definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <div class="body">
    <div class="container">
      <h2 class="title">My Notes</h2>
      <NotesForm />

      <div v-if="!!notes.length" class="notes">
        <NCard v-for="note in notes" class="note">
          <h3 class="note-title">{{ note.title }}</h3>
          <p class="note-body">{{ note.note }}</p>
        </NCard>
      </div>
      <div v-else>
        <h3>No exists notes. Create one</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  display: flex;
  justify-content: center;
}

.container {
  max-width: 50%;
  padding: 3rem;
  height: calc(100vh - 5rem);
}

.title {
  font-size: 2rem;
}

.notes {
  padding: 1rem 0 0;
}

.note {
  padding: 1rem;
  margin-bottom: 1rem;
}

.note-title {
  font-weight: bold;
  font-size: 1.25rem;
}
</style>