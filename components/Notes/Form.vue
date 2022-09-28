<script setup lang="ts">
const notesInput = reactive({ title: '', note: '' });
const { saveNote } = useDB();

const onSave = async () => {
  if (!notesInput.title || !notesInput.note) return;
  try {
    await saveNote(notesInput.title, notesInput.note);
    notesInput.title = '';
    notesInput.note = '';
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <NCard class="card">
    <input v-model="notesInput.title" class="input" placeholder="Title of note" />
    <textarea v-model="notesInput.note" class="input" cols="30" placeholder="My note" />
    <NButton class="button" @click="onSave">Save note</NButton>
  </NCard>
</template>

<style scoped>
.card {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  min-width: 325px;
}

.input {
  border: .1rem solid rgba(0, 0, 0, .1);
  border-radius: .25rem;
  padding: .25rem;
}

.input:not(:last-child) {
  margin-bottom: .5rem;
}

.button {
  display: flex;
  justify-content: center;
}
</style>