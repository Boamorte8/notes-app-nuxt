<script setup lang="ts">
const { signUp } = useAuth();
const authState = ref<'login' | 'signup'>('login');
const email = ref('');
const password = ref('');

const changeText = computed<string>(() =>
  authState.value === 'login' ? "Don't have an account? Create one now" : 'Already have an account? Go ahead and log in')

const toggleAuthState = () => {
  authState.value = authState.value === 'login' ? 'signup' : 'login';
}

const onSubmit = () => {
  if (!!email.value && !!email.value) {
    signUp({ email: email.value, password: password.value })
  }
}
</script>

<template>
  <div>
    <NCard class="card">
      <h2 class="title">{{ authState }}</h2>
      <div class="inputs">
        <input v-model="email" class="input" type="email" placeholder="Email">
        <input v-model="password" class="input" type="password" placeholder="Password">
      </div>
      <NButton class="button" @click="onSubmit">Submit</NButton>
      <p class="link" @click="toggleAuthState">{{ changeText }}</p>
    </NCard>
  </div>
</template>

<style scoped>
.card {
  padding: 1.5rem;
  width: 25rem;
}

.title {
  font-size: 1.75rem;
  margin-bottom: .75rem;
  text-transform: capitalize;
}

.inputs {
  display: flex;
  flex-direction: column;
}

.input {
  margin-bottom: .9rem;
  padding: .25rem;
  outline: none;
  border: .1rem solid rgba(0, 0, 0, .1);
  border-radius: .25rem;
}

.button {
  margin-bottom: .3rem;
  text-transform: capitalize;
}

.link {
  color: blue;
  font-size: .6rem;
  cursor: pointer;
  user-select: none;
}
</style>
