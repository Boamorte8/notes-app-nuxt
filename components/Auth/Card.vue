<script setup lang="ts">
const { signIn, signUp } = useAuth();
const router = useRouter();
const authState = ref<'login' | 'signup'>('login');
const authError = ref('');
const email = ref('');
const password = ref('');
const showConfirmEmailMessage = ref(false);

const changeText = computed<string>(() =>
  authState.value === 'login' ? "Don't have an account? Create one now" : 'Already have an account? Go ahead and log in')

const toggleAuthState = () => {
  authError.value = '';
  authState.value = authState.value === 'login' ? 'signup' : 'login';
}

const onSubmit = async () => {
  if (!!email.value && !!email.value) {
    authError.value = '';
    try {
      if (authState.value === 'signup') {
        await signUp({ email: email.value, password: password.value });
        showConfirmEmailMessage.value = true;
      } else {
        await signIn({ email: email.value, password: password.value });
        router.push('/profile');
      }
    } catch (error) {
      authError.value = error.message;
    }
    email.value = '';
    password.value = '';
  } else {
    authError.value = 'Please enter an email and password';
  }
}
</script>

<template>
  <div>
    <NCard class="card">
      <div v-if="!showConfirmEmailMessage">
        <h2 class="title">{{ authState }}</h2>
        <div class="inputs">
          <input v-model="email" class="input" type="email" placeholder="Email">
          <input v-model="password" class="input" type="password" placeholder="Password">
        </div>
        <NButton class="button" @click="onSubmit">Submit</NButton>
        <p v-if="authError" class="error">{{ authError }}</p>
        <p class="link" @click="toggleAuthState">{{ changeText }}</p>
      </div>
      <div v-else>
        <h2 class="title">Check email for confirmation message</h2>
      </div>
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
  margin-bottom: .4rem;
  text-transform: capitalize;
}

.link {
  color: blue;
  font-size: .75rem;
  cursor: pointer;
  user-select: none;
}

.error {
  color: red;
  font-size: .75rem;
}

.dark .link {
  color: #6161f3;
}
</style>
